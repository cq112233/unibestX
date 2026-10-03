import { describe, expect, it } from 'vitest';
import { filter, fromArray, map, scan, Subject, take, tap } from '@/src/utils/rxjs-lite/index.uts';

describe('rxjs-lite Unit Tests', () => {
  it('should emit and transform values using fromArray and map', () => {
    const results: number[] = [];
    fromArray([1, 2, 3])
      .pipe(map((x: number): number => x * 2))
      .subscribe((val: number) => {
        results.push(val);
      });

    expect(results).toEqual([2, 4, 6]);
  });

  it('should filter values using filter operator', () => {
    const results: number[] = [];
    fromArray([1, 2, 3, 4, 5])
      .pipe(filter((x: number): boolean => x % 2 === 0))
      .subscribe((val: number) => {
        results.push(val);
      });

    expect(results).toEqual([2, 4]);
  });

  it('should support Subject multicast and unsubscription', () => {
    const subject$ = new Subject<string>();
    const received: string[] = [];

    const sub = subject$.asObservable().subscribe((msg: string) => {
      received.push(msg);
    });

    subject$.next('hello');
    subject$.next('world');
    sub.unsubscribe();
    subject$.next('ignored');

    expect(received).toEqual(['hello', 'world']);
  });

  it('should support scan operator for accumulation', () => {
    const results: number[] = [];
    fromArray([1, 2, 3, 4])
      .pipe(scan((acc: number, curr: number): number => acc + curr, 0))
      .subscribe((val: number) => {
        results.push(val);
      });

    expect(results).toEqual([1, 3, 6, 10]);
  });

  it('should support take operator to limit emissions', () => {
    const results: number[] = [];
    fromArray([1, 2, 3, 4, 5])
      .pipe(take(3))
      .subscribe((val: number) => {
        results.push(val);
      });

    expect(results).toEqual([1, 2, 3]);
  });

  it('should perform side-effects with tap operator', () => {
    const tapped: number[] = [];
    const results: number[] = [];

    fromArray([10, 20])
      .pipe(tap((x: number) => tapped.push(x * 10)))
      .pipe(map((x: number): number => x + 1))
      .subscribe((val: number) => {
        results.push(val);
      });

    expect(tapped).toEqual([100, 200]);
    expect(results).toEqual([11, 21]);
  });
});

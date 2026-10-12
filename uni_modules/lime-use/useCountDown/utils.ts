// @ts-nocheck
import { fillZero } from '@/uni_modules/lime-shared/fillZero';
import type { CurrentTime } from './index'


export function parseFormat(format: string, currentTime: CurrentTime): string {
  const { days } = currentTime;
  let { hours, minutes, seconds, milliseconds } = currentTime;

  if (format.includes('DD')) {
    format = format.replace('DD', fillZero(days));
  } else {
    hours += days * 24;
  }

  if (format.includes('HH')) {
    format = format.replace('HH', fillZero(hours));
  } else {
    minutes += hours * 60;
  }

  if (format.includes('mm')) {
    format = format.replace('mm', fillZero(minutes));
  } else {
    seconds += minutes * 60;
  }

  if (format.includes('ss')) {
    format = format.replace('ss', fillZero(seconds));
  } else {
    milliseconds += seconds * 1000;
  }

  if (format.includes('S')) {
    const ms = fillZero(milliseconds, 3);

    if (format.includes('SSS')) {
      format = format.replace('SSS', ms);
    } else if (format.includes('SS')) {
      format = format.replace('SS', ms.slice(0, 2));
    } else {
      format = format.replace('S', ms.charAt(0));
    }
  }

  return format;
}

// @ts-nocheck
export function findClosestElementWithStyle(startEl: UniElement | null, styleProperty: string): UniElement | null {
    let currentEl: UniElement | null = startEl;
    
    while (currentEl != null) {
        // Check if the current element has the style property with a non-empty value
        const styleValue = currentEl?.style.getPropertyValue(styleProperty) ?? '';
        if (styleValue.trim() != '') {
            return currentEl;
        }
        
        // Move to parent element
        currentEl = currentEl.parentElement;
    }
    
    // Return null if no element with the specified style was found
    return null;
};
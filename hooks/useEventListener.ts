import { useEffect, useRef } from "react";
import { isFunction, isNil } from "swiss-knife-utils";
import { useDeepCompareMemo } from "use-deep-compare";

export function useEventListener<
    EventKeyDocument extends keyof DocumentEventMap,
    EventKeyHTML extends keyof HTMLElementEventMap,
    EventKeyWindow extends keyof WindowEventMap,
    Listener extends (
        event:
            | DocumentEventMap[EventKeyDocument]
            | HTMLElementEventMap[EventKeyHTML]
            | WindowEventMap[EventKeyWindow]
    ) => void
>(
    element: Document | HTMLElement | Window | null | undefined,
    eventName: EventKeyDocument | EventKeyHTML | EventKeyWindow | string,
    listener: Listener,
    options?: boolean | AddEventListenerOptions
): void {
    const savedListener = useRef<Listener>();
    const memoizedOptions = useDeepCompareMemo(() => options, [options]);

    useEffect(() => {
        savedListener.current = listener;
    }, [listener]);

    useEffect(() => {
        if (isNil(element) || !isFunction(element?.addEventListener)) {
            return;
        }

        const eventListener = (event: any) => {
            if (isFunction(savedListener.current)) {
                savedListener.current(event);
            }
        };

        element.addEventListener(eventName, eventListener, memoizedOptions);

        return () => {
            element.removeEventListener(eventName, eventListener, memoizedOptions);
        };
    }, [eventName, element, memoizedOptions]);
}

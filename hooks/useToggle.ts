import {useCallback, useMemo, useState} from "react";


export interface UseToggleActions {
    toggle: () => void;
    setTrue: () => void;
    setFalse: () => void;
}

export function useToggle(initialState: boolean = false): [boolean, UseToggleActions["toggle"], UseToggleActions["setTrue"], UseToggleActions["setFalse"]] {
    const [state, setState] = useState<boolean>(initialState);
    const actions = useMemo<UseToggleActions>(() => {
        return {
            toggle: () => setState(prevState => !prevState),
            setTrue: () => setState(true),
            setFalse: () => setState(false)
        }
    }, [setState])

    return [state, actions.toggle, actions.setTrue, actions.setFalse]
}

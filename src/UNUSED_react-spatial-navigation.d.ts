/* eslint-disable no-unused-vars */
declare module '@noriginmedia/react-spatial-navigation' {
    import { Props } from 'react';

    type Direction = 'left' | 'right' | 'up' | 'down';

    export interface Layout {
        height: number;
        left: number;
        node: HTMLElement;
        top: number;
        width: number;
        x: number;
        y: number;
    }

    export interface FocusableProps {
        /**
         * Whether component is currently focused. It is only `true` if this exact component is focused, e.g. when this component propagates focus to child component, this value will be `false`.
         */
        focused: boolean;
        /**
         * Focus key that represents the focus key that was applied to HOC component. Might be `null` when not set. It is recommended to not rely on this prop.
         */
        focusKey: string | null;
        /**
         * This prop indicates that the component currently has some focused child on any depth of the focusable tree.
         */
        hasFocusedChild: boolean;
        /**
         * Move the focus by direction, if you can't use buttons or focusing by key.
         *
         * ```javascript
         * navigateByDirection('left'); // The focus is moved to left
         * navigateByDirection('right'); // The focus is moved to right
         * navigateByDirection('up'); // The focus is moved to up
         * navigateByDirection('down'); // The focus is moved to down
         * ```
         */
        navigateByDirection(direction: Direction): void;
        /**
         * Focus key of the parent component. If it is a top level focusable component, this prop will be `SN:ROOT`.
         */
        parentFocusKey: string;
        /**
         * This function pauses key listeners. Useful when you need to temporary disable navigation. (e.g. when player controls are hidden during video playback and you want to bind the keys to show controls again).
         */
        pauseSpatialNavigation(): void;
        /**
         * Focus key of the child component focused during the focus propagation when the parent component is focused the first time or has `forgetLastFocusedChild` set.
         */
        preferredChildFocusKey: string;
        /**
         * Focus key that is either the `focusKey` prop of the HOC, or automatically generated focus key like `sn:focusable-item-23`.
         */
        realFocusKey: string;
        /**
         * This function resumes key listeners if it was paused with [`pauseSpatialNavigation`](https://github.com/NoriginMedia/react-spatial-navigation#pauseSpatialNavigation-function)
         */
        resumeSpatialNavigation(): void;
        /**
         * This method sets the focus to another component (when focus key is passed as param) or steals the focus to itself (when used w/o params). It is also possible to set focus to a non-existent component, and it will be automatically picked up when component with that focus key will get mounted. This preemptive setting of the focus might be useful when rendering lists of data. You can assign focus key with the item index and set it to e.g. first item, then as soon as it will be rendered, that item will get focused. In Native mode this method is ignored (`noop`).
         *
         * ```javascript
         * setFocus(); // set focus to self
         * setFocus('SOME_COMPONENT'); // set focus to another component if you know its focus key
         * ```
         */
        setFocus(focus?: string): void;
        /**
         * This method works exactly like setFocus, but it always sets focus to current component no matter which params you pass in. This is the only way to set focus in Native mode.
         *
         * ```javascript
         * <TouchableOpacity onFocus={stealFocus} />
         * ```
         */
        stealFocus(): void;
    }

    export interface FocusableWrapperProps {
        children?: ReactNode;
        /**
         * Determine whether this component should be focusable (in other words, whether it's currently participating in the spatial navigation tree). This allows a focusable component to be ignored as a navigation target despite being mounted (e.g. due to being off-screen, hidden, or temporarily disabled).
         *
         *Note that behaviour is undefined for trees of components in which an `focusable={false}` component has any `focusable={true}` components as descendants; it is recommended to ensure that all components in a given branch of the spatial navigation tree have a common `focusable` state. Also `focusable={false}` does not prevent component from being directly focused with `setFocus`. It only blocks "automatic" focus logic such as directional navigation, or focusing component as lastFocusedChild or preferredFocusChild.
         */
        focusable?: boolean;
        /**
         * String that is used as a component focus key. Should be unique, otherwise it will override previously stored component with the same focus key in the Spatial Navigation service storage of focusable components. If this is not specified, the focus key will be generated automatically.
         */
        focusKey?: string;
        /**
         * Determine whether this component should not remember the last focused child components. By default when focus goes away from the component and then it gets focused again, it will focus the last focused child. This functionality is enabled by default.
         */
        forgetLastFocusedChild?: boolean;
        /**
         * Callback function that is called when the item is currently focused and an arrow (LEFT, RIGHT, UP, DOWN) key is pressed.
         *
         * Payload:
         * 1. The directional arrow (left, right, up, down): string
         * 2. All the props passed to HOC is passed back to this callback. Useful to avoid creating callback functions during render.
         *
         * Prevent default navigation: By returning false the default navigation behavior is prevented.
         *
         * ```javascript
         * const onPress = (direction, { prop1, prop2 }) => {
         * ...
         * return false;
         * };
         *
         * ...
         * <FocusableItem
         *  prop1={111}
         *  prop2={222}
         *  onArrowPress={onPress}
         * />
         * ...
         * ```
         */
        onArrowPress?(direction: Direction, props?: Props): boolean;
        /**
         * Callback function that is called when the item becomes focused directly or during propagation of the focus to the children components. For example when you have nested tree of 5 focusable components, this callback will be called on every level of down-tree focus propagation.
         *
         * Payload: Component layout object is passed as a first param. All the component props passed back to this callback. Useful to avoid creating callback functions during render. `x` and `y` are relative coordinates to parent DOM (**not the Focusable parent**) element. `left` and `top` are absolute coordinates on the screen.
         *
         * ```javascript
         * const onFocused = ({ width, height, x, y, top, left, node }, { prop1, prop2 }) => {...};
         * ...
         * <FocusableItem
         *  prop1={111}
         *  prop2={222}
         *  onBecameFocused={onFocused}
         * />
         * ...
         * ```
         */
        onBecameFocused?(layout: Layout, props?: Props): void;
        /**
         * Callback function that is called when the item is currently focused and Enter (OK) key is pressed.
         *
         * Payload: All the props passed to HOC is passed back to this callback. Useful to avoid creating callback functions during render.
         *
         * ```javascript
         * const onPress = ({ prop1, prop2 }) => {...};
         *
         * ...
         * <FocusableItem
         *  prop1={111}
         *  prop2={222}
         *  onEnterPress={onPress}
         * />
         * ...
         * ```
         */
        onEnterPress?(props?: Props): void;
        /**
         * Determine whether to track when any child component is focused. Wrapped component can rely on `hasFocusedChild` prop when this mode is enabled. Otherwise `hasFocusedChild` will be always `false`.
         */
        trackChildren?: boolean;
    }

    export interface WithFocusableOptions {
        /**
         * Determine whether this component should not remember the last focused child components. By default when focus goes away from the component and then it gets focused again, it will focus the last focused child. This functionality is enabled by default.
         */
        forgetLastFocusedChild?: boolean;
        /**
         * Determine whether to track when any child component is focused. Wrapped component can rely on `hasFocusedChild` prop when this mode is enabled. Otherwise `hasFocusedChild` will be always `false`.
         */
        trackChildren?: boolean;
    }

    export interface InitNavigationParams {
        /**
         * Enable console debugging.
         */
        debug?: boolean;
        /**
         * Enable Native mode. It will block certain web-only functionality such as:
         *
         * * adding window key listeners
         * * measuring DOM layout
         * * `onBecameFocused` callback doesn't return coordinates, but still has node ref to lazy measure layout
         * * coordinates calculations when navigating
         * * down-tree propagation
         * * last focused child
         * * preferred focus key
         *
         *Native mode should be only used to keep the tree of focusable components and to sync the focused flag to enable styling for focused components. In Native mode you can only stealFocus to some component to flag it as focused, normal setFocus method is blocked because it will not propagate to native layer.
         */
        nativeMode?: boolean;
        /**
         * Enable to throttle the function fired by the event listener.
         */
        throttle?: number;
        /**
         * Enable visual debugging (all layouts, reference points and siblings refernce points are printed on canvases)
         */
        visualDebug?: boolean;
    }

    /**
     * Function that needs to be called to enable Spatial Navigation system and bind key event listeners. Accepts [Initialization Config](https://github.com/NoriginMedia/react-spatial-navigation#initialization-config) as a param.
     */
    export function initNavigation(params?: InitNavigationParams): void;

    /**
     * Function to set custom key codes.
     *
     * ```javascript
     * setKeyMap({
     *  'left': 9001,
     *  'up': 9002,
     *  'right': 9003,
     *  'down': 9004,
     *  'enter': 9005
     * });
     * ```
     */
    export function setKeyMap({ [string]: number }): void;

    /**
     * Main HOC wrapper function. Accepts [config](https://github.com/NoriginMedia/react-spatial-navigation#config) as a param.
     *
     * ```javascript
     * const FocusableComponent = withFocusable({...})(Component);
     * ```
     */
    export function withFocusable(
        WithFocusableOptions?: WithFocusableOptions,
    ): <T>(
        Component: React.FunctionComponent<T>,
    ) => (FC: Omit<T, keyof FocusableProps> & FocusableWrapperProps) => React.ReactComponentElement;
}

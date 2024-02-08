 => PureCounterComponents is better than the SimpleCounterComponent.
 
 # Optimised Rendering of PureComponent:
 PureComponent which implements a method performs a shallow comparison of the component's props and state, and it only re-renders the component if there are changes. This optimization reduces unnecessary re-renders, improving performance.

 # Preventing Unnecessary Updates: 
  The component will not re-render if its props and state remain the same. This prevents unnecessary updates to the component's UI, resulting in better performance, especially in scenarios where the component's state or props frequently change.

  # Efficient Rendering: 
  PureCounterComponent ensures that rendering occurs only when necessary, leading to more efficient resource utilization compared to SimpleCounterComponent, which would re-render on every setState call regardless of whether there were actual changes in props or state.

  => Overall, PureCounterComponent offers better performance due to its optimized rendering mechanism, which minimizes unnecessary updates and ensures efficient resource utilization.
import React from "react";
const useInView = (options) => {
    const [isInView, setIsInView] = React.useState(false);
    const ref = React.useRef < HTMLDivElement > (null);
    const memoizedOptions = React.useMemo(() => {
        return { threshold: 0.1, ...options };
    }, [options]);
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            memoizedOptions
        );
        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [memoizedOptions]);
    return [ref, isInView];
};
export default useInView;
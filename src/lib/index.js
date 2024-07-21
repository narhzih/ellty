export const mergeClasses = (...args) => {
    const classSet = new Set();

    function addClass(cls) {
        if (typeof cls === 'string') {
            cls.split(' ').forEach((c) => c && classSet.add(c));
        } else if (Array.isArray(cls)) {
            cls.forEach(addClass);
        } else if (typeof cls === 'object' && cls !== null) {
            Object.keys(cls).forEach((key) => cls[key] && classSet.add(key));
        }
    }

    args.forEach(addClass);

    return Array.from(classSet).join(' ');
};

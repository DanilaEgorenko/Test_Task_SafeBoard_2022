export default function getListByGroups(list) {
    const groups = {};
    for (let el of list) {
        if (!groups[el.group]) groups[el.group] = [];
        groups[el.group].push(el);
    }
    return groups;
}
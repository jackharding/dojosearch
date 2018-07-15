export const toggleArrayItem = (arr, id) => {
    let isSelected = arr.find(item => item === id);

    if(isSelected) {
        return arr.filter(item => item !== id);
    } else {
        return [
            ...arr,
            id
        ];
    }
}
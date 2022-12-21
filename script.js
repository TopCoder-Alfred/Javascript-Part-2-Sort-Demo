/**
 * 从html中抓到节点:
 * 1. document.querySelector(): 每次只能拿到一个节点
 * 2. document.querySelectorAll(): 可以抓到一样属性的全部节点利用index去控制不同的节点
 */

const span = document.querySelector("span");
const list = [];
let number = 0

/**
 * addEventListener和onclick function的区别:
 * (overwrite)如果写同样功能性的onclick函数只会触发最后一个onclick函数, 第一个压根就不会执行
 */
span.addEventListener("click", () => {
    const inputValue = document.querySelector("input");
    list.push(+inputValue.value);
    inputValue.value = "";
    const newList = mySort(list);

    const tbody = document.querySelector("tbody");
    // innerHTML用来存储dom节点
    tbody.innerHTML = "";
    newList.forEach((item, index) => {
        // 创造dom节点
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        // 给dom节点添加内容实用textContent
        th.textContent = index + 1;
        const td = document.createElement("td");
        td.textContent = item;
        tr.append(th, td);
        tbody.append(tr);
    })
})

const mySort = (list) => {
    const flatList = list.flat(Infinity);
    const isNumber = (element) => {
        return element === +element;
    }
    const filterList = flatList.filter(item => isNumber(item));
    const newList = [...new Set(filterList)];
    const sortList = newList.sort((a, b) => a - b)
    return sortList;
}


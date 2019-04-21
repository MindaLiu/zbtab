import HelloIndexedDB from 'hello-indexeddb'

const depsIndex = {
    name: 'deps',
    keyPath: 'deps'
}

const idb = new HelloIndexedDB({
    name: 'zbdb',
    version: 1,
    stores: [
        {
            name: 'staffTable',
            keyPath: 'id',
            indexes: [
                depsIndex
            ]
        },
    ]
});
const staffTable = idb.use('staffTable');
// const zbTable = idb.use('zbTable');

export default {
    //增加/更新一个员工
    updateStaff(obj) {
        staffTable.put(obj);
    },
    //获取所有员工
    getAllStaff() {

    },
    //获取符合条件的员工
    getStaff(key, value) {

    },
    //删除
    deleteStaff() {

    }
}
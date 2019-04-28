import HelloIndexedDB from 'hello-indexeddb'

const depsIndex = {
    name: 'dept',
    keyPath: 'dept'
}

const idb = new HelloIndexedDB({
    name: 'zbdb',
    version: 1,
    stores: [
        {
            name: 'staffTable',
            keyPath: 'id',
            autoIncrement: true,
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
    async putStaff(obj) {
        let result = staffTable.put(obj);
        return result;
    },
    //获取所有员工
    getAllStaff() {
        
    },
    //获取符合条件的所有员工
    async getStaff(key,value) {
        let p = await staffTable.query(key,value);
        return p;
    },
    //通过 id 删除某员工
    deleteStaff(id) {
        staffTable.delete(id);
    }
}
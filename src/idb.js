import HelloIndexedDB from 'hello-indexeddb'

const departmentIndex = {
    name: 'inDept',
    keyPath: 'department'
};
const inDYBIndex = {
    name: 'dyb',
    keyPath: 'inDYB'
};
const onDYBIndex = {
    name: 'ondyb',
    keyPath: 'onDYB'
};
const arrangeableIndex = {
    name: 'arrangeable',
    keyPath: 'arrangeable'
};
const bzzIndex = {
    name: 'isBZZ',
    keyPath: 'isBZZ'
};

const idb = new HelloIndexedDB({
    name: 'zbdb',
    version: 1,
    stores: [
        {
            name: 'staffTable',
            keyPath: 'id',
            indexes: [
                departmentIndex,
                inDYBIndex,
                arrangeableIndex
            ]
        },
        {
            name: 'zbTable',
            keyPath: 'id',
            indexes: [
                departmentIndex,
                onDYBIndex,
                bzzIndex
            ]
        }
    ]
});
const staffTable = idb.use('staffTable');
const zbTable = idb.use('zbTable');

export default {
    /************** 人员表操作 ******************/
    //增加/更新一个员工
    async updateStaff(obj) {
        await staffTable.put(obj);
    },
    //查询某部门的所有员工，返回数组
    async getStaff(key, value) {
        let objs = await staffTable.query(key, value)
        return objs;    //promise 对象
    },
    // //查询值大夜班的所有员工，返回数组
    // async getStaffIn(key, value) {
    //     let objs = await staffTable.query(key, value)
    //     return objs;    //promise 对象
    // },
    //查询某部门中可排班的员工，返回数组
    async getArrangableStaffOf(key, value) {
        let queryStringArray = [{ key: 'arrangeable', value: true }];
        let queryString = { key: key, value: value };
        queryStringArray.push(queryString);
        let objs = await staffTable.select(queryStringArray);
        return objs;    //promise 对象
    },
    //通过id 删除一个员工
    async deleteStaff(key) {
        await staffTable.delete(key);
    },

    /************** 值班表操作 ******************/
    //更新值班记录（更换值班人员）
    async updateZbRecord(obj) {
        await zbTable.put(obj);
    },
    //查询某部门的值班记录
    async getZbRecordOf(key, value) {
        let objs = await zbTable.query(key, value)
        return objs;    //promise 对象
    },
    //查询班组长
    async getBZZ() {
        let obj = await zbTable.find('isBZZ', true)
        return obj;    //promise 对象
    },
    //查询值大夜班的人员
    async getStaffOnDYB() {
        let obj = await zbTable.find('onDYB', true)
        return obj;    //promise 对象
    },
}
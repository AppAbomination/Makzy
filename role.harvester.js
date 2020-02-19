module.exports = {
    run: function (creep) {

        if(creep.memory.working == false && creep.carry.energy == creep.carryCapacity ){
            creep.memory.working = true;
        }
        else if(creep.memory.working == true && creep.carry.energy == 0){
            creep.memory.working = false;
        }

        if (creep.memory.working == false) {
            var source = creep.pos.findClosestByPath(FIND_SOURCES);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
        else {
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: (s) => s.energy < s.energyCapacity
            });
            if(structure != undefined){
            if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(structure);
            }
            }
        }

    }
};
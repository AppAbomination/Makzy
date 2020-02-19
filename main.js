var roleHarvester = require("role.harvester");
var roleUpgrader = require("role.upgrader");
var roleBuilder = require("role.builder");
var roleRepairer = require("role.repairer");

module.exports.loop = function(){
    for(let name in Memory.creeps){
        if(Game.creeps[name] == undefined){
            delete Memory.creeps[name];
        }
    }
    for(let name in Game.creeps) {

        var creep = Game.creeps[name];

        if(creep.memory.role == "harvester") {
            roleHarvester.run(creep);
        }
        else if(creep.memory.role == "upgrader"){
            roleUpgrader.run(creep);
        }
        else if(creep.memory.role == "builder"){
            roleBuilder.run(creep);
        }
        else if(creep.memory.role == "repairer"){
            roleHarvester.run(creep);
        }

        Memory.Harvesters = numeroDeHarvesters;
        Memory.Upgraders = numeroDeUpgraders;
        Memory.Builders = numeroDeBuilders;
        Memory.Repairers = numeroDeRepairers;

        var minimoNumeroDeHarvesters = 10;
        var minimoNumeroDeUpgraders = 1;
        var minimoNumeroDeBuilders = 1;
        var minimoNumeroDeRepairers = 5;
        var numeroDeHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
        var numeroDeUpgraders = _.sum(Game.creeps, (c) => c.memory.role == "upgrader");
        var numeroDeBuilders = _.sum(Game.creeps, (c) => c.memory.role == "builder");
        var numeroDeRepairers = _.sum(Game.creeps, (c) => c.memory.role == "repairer");

        //var name = undefined;
        if(numeroDeHarvesters < minimoNumeroDeHarvesters){
            name = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,MOVE],undefined,
                {role:"harvester",working:false});
            if(!(name < 0)){
                console.log("Un creep spawneo: " + name + ". Su rol es " + Game.creeps[name].memory.role);
            }
        }
        else if(numeroDeUpgraders < minimoNumeroDeUpgraders){
            name = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE,MOVE],undefined,
                {role:"upgrader",working:false});
            if(!(name < 0)){
                console.log("Un creep spawneo: " + name + ". Su rol es " + Game.creeps[name].memory.role);
            }
        }
        else if(numeroDeRepairers < minimoNumeroDeRepairers) {
            name = Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined,
                {role: "repairer", working: false});
            if(!(name < 0)){
                console.log("Un creep spawneo: " + name + ". Su rol es " + Game.creeps[name].memory.role);
            }
        }
        else if(numeroDeBuilders < minimoNumeroDeBuilders) {
            name = Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE, MOVE], undefined,
                {role: "builder", working: false});
            if(!(name < 0)){
                console.log("Un creep spawneo: " + name + ". Su rol es " + Game.creeps[name].memory.role);
            }
        }
        }
    }
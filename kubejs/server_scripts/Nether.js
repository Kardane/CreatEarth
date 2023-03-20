onEvent('entity.spawned', event => {
  if(event.entity.type == 'minecraft:zombified_piglin'){
    let pos = {x:event.entity.x,y:event.entity.y,z:event.entity.z}
    let spawnRoll = random(1,1000)
    let spawnRoll2 = random(1,100)
    if(spawnRoll > 900){
      event.server.runCommandSilent(`summon minecraft:piglin ${pos.x} ${pos.y} ${pos.z} {IsImmuneToZombification:1b}`)
      event.cancel()
    } else if(spawnRoll > 800){
      if(spawnRoll2 < 20){
        event.server.runCommandSilent(`summon minecraft:hoglin ${pos.x} ${pos.y} ${pos.z}`)
      } else if(spawnRoll2 < 40){
        event.server.runCommandSilent(`summon alexsmobs:warped_toad ${pos.x} ${pos.y} ${pos.z}`)
      } else if(spawnRoll2 < 60){
        event.server.runCommandSilent(`summon minecraft:strider ${pos.x} ${pos.y} ${pos.z}`)
      } else if(spawnRoll2 < 80){
        event.server.runCommandSilent(`summon alexsmobs:crimson_mosquito ${pos.x} ${pos.y} ${pos.z}`)
      }  else {
        event.server.runCommandSilent(`summon quark:foxhound ${pos.x} ${pos.y} ${pos.z}`)
      }
      event.cancel()
    } else if(spawnRoll > 750){
      if(spawnRoll2 < 20){
        event.server.runCommandSilent(`summon minecraft:magma_cube ${pos.x} ${pos.y} ${pos.z}`)
      } else if(spawnRoll2 < 40){
        event.server.runCommandSilent(`summon alexsmobs:dropbear ${pos.x} ${pos.y} ${pos.z}`)
      } else if(spawnRoll2 < 60){
        event.server.runCommandSilent(`summon minecraft:blaze ${pos.x} ${pos.y} ${pos.z}`)
      } else if(spawnRoll2 < 80){
        event.server.runCommandSilent(`summon alexsmobs:soul_vulture ${pos.x} ${pos.y} ${pos.z}`)
      } else {
        event.server.runCommandSilent(`summon rottencreatures:burned ${pos.x} ${pos.y} ${pos.z}`)
      }
      event.cancel()
    } else if(spawnRoll > 730){
      if(spawnRoll2 < 33){
        event.server.runCommandSilent(`summon quark:wraith ${pos.x} ${pos.y} ${pos.z}`)
      } else if(spawnRoll2 < 66){
        event.server.runCommandSilent(`summon alexsmobs:straddler ${pos.x} ${pos.y} ${pos.z}`)
      } else {
        event.server.runCommandSilent(`summon minecraft:ghast ${pos.x} ${pos.y} ${pos.z}`)
      }
      event.cancel()
    } else if(spawnRoll > 720){
      if(spawnRoll2 < 33){
        event.server.runCommandSilent(`summon dungeons_mobs:wildfire ${pos.x} ${pos.y} ${pos.z}`)
      } else if(spawnRoll2 < 66){
        event.server.runCommandSilent(`summon alexsmobs:bone_serpent ${pos.x} ${pos.y} ${pos.z}`)
      } else {
        event.server.runCommandSilent(`summon minecraft:wither_skeleton ${pos.x} ${pos.y} ${pos.z}`)
      }
      event.cancel()
    }

  }
})

onEvent('item.entity_interact', event => {
  if(event.target.type == 'minecraft:zombified_piglin' && event.item.id == 'minecraft:golden_apple'){
    let piglin = event.target
    if(piglin.potionEffects.isActive('minecraft:weakness') == true){
      event.player.playSound("minecraft:entity.zombie_villager.cure",1,1)
      event.player.swingArm("MAIN_HAND")
      event.item.count--
      piglin.persistentData.convert = 200
      piglin.mergeFullNBT('{TicksFrozen:600}')
      event.player.tell(piglin.getPersistentData())
    }
  }
})
/*
onEvent('entity.hurt', event => {
  if(event.entity.type == 'minecraft:zombified_piglin' && event.entity.persistentData.convert && event.source.type == 'freeze'){
    event.cancel()
  }
})

onEvent('level.tick', event => {
    event.level.entities.forEach(e => {
    if (e.type == 'minecraft:zombified_piglin' && e.persistentData.convert) {
        if(e.persistentData.convert > 0){
          e.persistentData.convert--
        } else {
          event.server.runCommandSilent(`summon minecraft:piglin ${e.x} ${e.y} ${e.z} {IsImmuneToZombification:1b}`)
          e.kill()
        }
    }
  })
})*/
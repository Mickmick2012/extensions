(function(Scratch) {
  'use strict';
  const vm = Scratch.vm;
  class ScratchAPI {
    getInfo() {
      return {
        id: 'ScratchAPI',
        name: 'ScratchAPI',
        color1: '#2dc4c4',
        color2: '#2dc4b3',
        color3: '#29a395',
        blocks: [
          {
            opcode: 'API_get',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get [type] from [id]',
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'views'
              },
              json: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '104'
              }
            }
          }
        };
  }
  }

    API_get({ type, id }) {
      try {
        let json = JSON.parse(Scratch.fetch('https://trampoline.turbowarp.org/proxy/projects/' + id));
        let result = json[item];
        if (typeof result == 'object') {
          return JSON.stringify(result);
        } else {
          return result;
        }
      } catch {
        return ' ';
      }
    }

  Scratch.extensions.register(new ScratchAPI());
})(Scratch);

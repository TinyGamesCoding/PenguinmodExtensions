(function (Scratch) {
  'use strict';
  class Extension {
    getInfo() {
      return {
        //Load everything!!
        id: "windowModifiers",
        name: "Window Modifiers",
        color1: "#66b8ff",
        blocks: [
          { blockType: Scratch.BlockType.LABEL, text: "Window Header" },

          {
            opcode: 'setWindowTitle',
            text: 'Window Title [TEXT]',
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Window Name"
              }
            }
          },
          {
            opcode: 'setWindowIcon',
            text: 'Window Icon [URL]',
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "https://penguinmod.com/favicon.ico"
              }
            }
          },
          "---",
          {
            opcode: 'getWindowTitle',
            text: 'Window Title',
            blockType: Scratch.BlockType.REPORTER
          },
          {
            opcode: 'getWindowIcon',
            text: 'Window Icon',
            blockType: Scratch.BlockType.REPORTER
          },
          "---",
          {
            opcode: "isFocused",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is user using this window?"
          }
        ]
      };
    }

    //Functions
    setWindowTitle(args) {
      document.title = (args.TEXT).toString()
    }
    setWindowIcon(args) {
      document.querySelector('link[rel=icon]').href = (args.URL).toString()
    }

    getWindowTitle() {
      return document.title;
    }
    getWindowIcon() {
      return document.querySelector('link[rel=icon]').href;
    }

    isFocused() {
      return document.hasFocus();
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);
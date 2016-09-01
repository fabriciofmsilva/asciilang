'use strict';
import meow  from 'meow';
import chalk from 'chalk';

const MessageCLI = `
          ${chalk.blue('Usage')}
            ${chalk.white('$ asciilang')} ${chalk.red('<command>')} is one of:
              ${chalk.red('start')}

          ${chalk.blue('Options')}
            ${chalk.white('-h, --help       show usage information')}
            ${chalk.white('-v, --version    print version info and exit')}
            ${chalk.red('s')} Start application

          ${chalk.blue('Examples')}
            ${chalk.green('$ asciilang start')}
              ${chalk.white('or')}
            ${chalk.green('$ asciilang s')}

      `;

export const m = meow(MessageCLI, {
        alias: { h: 'help', v: 'version'},
        string: ['lang'],
        boolean: ['pager'],
        default: { lang: 'en' },
        '--': true
});

const cli = (action, flags) => action === 'start' || action === 's' ? 'start' : false;

export const cliStart = () => {
  if(cli(m.input[0], m.flags) == 'start'){
    return true;
  }else{
    console.log(`
    ${chalk.white('（っ＾▿＾）asciilang ')}
    ${chalk.green('👊 Foreign languages for developers')}
    ${MessageCLI}
    `);
    return false;
  }
}
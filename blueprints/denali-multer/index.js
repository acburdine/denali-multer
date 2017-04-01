import { Blueprint } from 'denali-cli';

export default class DenaliMulterBlueprint extends Blueprint {

  static blueprintName = 'denali-multer';
  static description = 'Installs denali-multer';

  locals(/* argv */) {
    console.log("This blueprint is run when denali-multer is installed via `denali install`. It's a good spot to make any changes to the consuming app or addon, i.e. create a config file, add a route, etc");
  }

}

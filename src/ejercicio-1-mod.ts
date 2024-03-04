/** 
 * 
 * Tupla para representar el usuario, acciones, y fecha
 * */ 
export type Log = [string, string[], Date]

/** 
 * 
 * Clase Logger, contiene usuarios de tipo Log
 * 
*/
export class Logger{
    private users: Log[];
    private static loggerInstance: Logger;

    private constructor(){
        this.users = [];
    }

    public static getloggerInstance(){
        if(!Logger.loggerInstance){
            Logger.loggerInstance = new Logger;
        }
        return Logger.loggerInstance;
    }
    /**
     * 
     * @param user usuario a añadir
     * añade un usuario a users
     */
    addUser(user: Log){
        this.users.push(user);
    }

    /**
     * 
     * @param user contiene el nombre de usuario a buscar
     * @returns retorna las acciones llevadas a cabo por ese usuario
     */
    getActions(user: string): string[]{
        let accions: string[] = [];
        this.users.forEach((user_) => {
            if(user_[0] === user){
                accions = user_[1];
            } else {
                return undefined;
            }
          });
          return accions;
    }

    /**
     * 
     * @param user contiene el nombre de usuario
     * @returns obtiene la fecha del  usuario
     */
    getTimeActions(user: string): Date{
        let time: Date;
        this.users.forEach((user_) => {
            if(user_[0] === user){
                time = user_[2];
            } else {
                return undefined;
            }
          });
          return time;
    }
    /**
     * 
     * @returns contiene el número de usuarios registrados
     */
    getUsers(){
        return this.users.length;
    }
}



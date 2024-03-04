import "mocha";
import { expect } from "chai";
import { Log, Logger} from "../src/ejercicio-1-mod";

describe("USERS IN LOGGER", () => {
  let date = new Date(22, 1); 
  let user_1: Log = ["Pepe", ["logea","consulta"], date];
  const loggerInstance = Logger.getloggerInstance(); 
  loggerInstance.addUser(user_1);

  it("numeros de usuarios", () => {
    const n: number = loggerInstance.getUsers()
    expect(n).to.equal(1);
  });
  it("acciones del usuario", () => {
    const actions: string[] = loggerInstance.getActions("Pepe")
    expect(actions).to.deep.equal(["logea", "consulta"]);
  });
  it("tiempos del usuario", () => {
    const time: Date = loggerInstance.getTimeActions("Pepe")
    let date = new Date(22, 1); 
    expect(time).to.deep.equal(date);
  });
  });


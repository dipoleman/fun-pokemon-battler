const {
  Pokemon,
  Fire,
  Water,
  Grass,
  Normal,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
  Pokeball,
  Trainer,
} = require("./pokemon");

describe("Pokemon", () => {
  test("returns the Pokemon's properties", () => {
    const testPokemon = new Pokemon("Moxy", 100, 99);
    expect(testPokemon.name).toBe("Moxy");
    expect(testPokemon.hitPoints).toBe(100);
    expect(testPokemon.attackDamage).toBe(99);
    expect(testPokemon.move).toBe("tackle");
  });

  test("returns the health after a hit", () => {
    const testPokemon = new Pokemon("Moxy", 100, 99);
    testPokemon.takeDamage(8);
    expect(testPokemon.hitPoints).toBe(92);
  });

  test("useMove method should return a console log and attack damage", () => {
    const testPokemon = new Pokemon("Moxy", 100, 99);
    const attack = testPokemon.useMove();
    expect(attack).toBe(99);
  });

  test("hasFainted method should return false,based on Pokemon's health", () => {
    const testPokemon = new Pokemon("Moxy", 100, 99);
    // 100 <= 0 returns false
    expect(testPokemon.hasFainted()).toBe(false);
  });
  test("hasFainted method should return true,based on Pokemon's health", () => {
    const testPokemon = new Pokemon("Moxy", 0, 99);
    // 0 <= 0 return true
    expect(testPokemon.hasFainted()).toBe(true);
  });
});

describe("Pokemon types", () => {
  test("effectiveAgainst test, fire should be effective against grass", () => {
    const firePokemon = new Fire("Flash");
    const grassPokemon = new Fire("Cow");
    grassPokemon.type = "grass";
    const waterPokemon = new Fire("Fishy");
    waterPokemon.type = "water";
    const normalPokemon = new Fire("Joker");
    normalPokemon.type = "normal";
    const firePokemon2 = new Fire("Flash reborn");

    expect(firePokemon.isEffectiveAgainst(grassPokemon)).toBe(true);
    expect(firePokemon.isEffectiveAgainst(waterPokemon)).toBe(false);
    expect(firePokemon.isEffectiveAgainst(normalPokemon)).toBe(false);
    expect(firePokemon.isEffectiveAgainst(firePokemon2)).toBe(false);
  });

  test("isWeakTo test, fire should be weak against water", () => {
    const firePokemon = new Fire("Flash");
    const grassPokemon = new Fire("Cow");
    grassPokemon.type = "grass";
    const waterPokemon = new Fire("Fishy");
    waterPokemon.type = "water";
    const normalPokemon = new Fire("Joker");
    normalPokemon.type = "normal";
    const firePokemon2 = new Fire("Flash reborn");
    expect(firePokemon.isWeakTo(waterPokemon)).toBe(true);
    expect(firePokemon.isWeakTo(grassPokemon)).toBe(false);
    expect(firePokemon.isWeakTo(normalPokemon)).toBe(false);
    expect(firePokemon.isWeakTo(firePokemon2)).toBe(false);
  });

  test("effectiveAgainst test, water should be effective against fire", () => {
    const firePokemon = new Fire("Flash");
    const grassPokemon = new Water("Cow");
    grassPokemon.type = "grass";
    const waterPokemon = new Water("Fishy");
    const normalPokemon = new Water("Joker");
    normalPokemon.type = "normal";
    const waterPokemon2 = new Water("Fishy reborn");

    expect(waterPokemon.isEffectiveAgainst(firePokemon)).toBe(true);
    expect(waterPokemon.isEffectiveAgainst(grassPokemon)).toBe(false);
    expect(waterPokemon.isEffectiveAgainst(normalPokemon)).toBe(false);
    expect(waterPokemon.isEffectiveAgainst(waterPokemon2)).toBe(false);
  });

  test("isWeakTo test, fire should be weak against water", () => {
    const firePokemon = new Fire("Flash");
    const grassPokemon = new Water("Cow");
    grassPokemon.type = "grass";
    const waterPokemon = new Water("Fishy");
    const normalPokemon = new Water("Joker");
    normalPokemon.type = "normal";
    const waterPokemon2 = new Water("Fishy reborn");
    expect(waterPokemon.isWeakTo(grassPokemon)).toBe(true);
    expect(waterPokemon.isWeakTo(firePokemon)).toBe(false);
    expect(waterPokemon.isWeakTo(normalPokemon)).toBe(false);
    expect(waterPokemon.isWeakTo(waterPokemon2)).toBe(false);
  });

  test("effectiveAgainst test, grass should be effective against water", () => {
    const firePokemon = new Fire("Flash");
    const grassPokemon = new Grass("Cow");
    const waterPokemon = new Water("Fishy");
    const normalPokemon = new Grass("Joker");
    normalPokemon.type = "normal";
    const grassPokemon2 = new Grass("Cow reborn");

    expect(grassPokemon.isEffectiveAgainst(waterPokemon)).toBe(true);
    expect(grassPokemon.isEffectiveAgainst(grassPokemon2)).toBe(false);
    expect(grassPokemon.isEffectiveAgainst(normalPokemon)).toBe(false);
    expect(grassPokemon.isEffectiveAgainst(firePokemon)).toBe(false);
  });

  test("isWeakTo test, grass should be weak against fire", () => {
    const firePokemon = new Fire("Flash");
    const grassPokemon = new Grass("Cow");
    const waterPokemon = new Water("Fishy");
    const normalPokemon = new Grass("Joker");
    normalPokemon.type = "normal";
    const grassPokemon2 = new Grass("Cow reborn");

    expect(grassPokemon.isWeakTo(firePokemon)).toBe(true);
    expect(grassPokemon.isWeakTo(grassPokemon2)).toBe(false);
    expect(grassPokemon.isWeakTo(normalPokemon)).toBe(false);
    expect(grassPokemon.isWeakTo(waterPokemon)).toBe(false);
  });
  test("effectiveAgainst test, normal should not be effective against anyone", () => {
    const firePokemon = new Fire("Flash");
    const grassPokemon = new Grass("Cow");
    const waterPokemon = new Water("Fishy");
    const normalPokemon = new Normal("Joker");
    const normalPokemon2 = new Normal("Joker reborn");

    expect(normalPokemon.isEffectiveAgainst(waterPokemon)).toBe(false);
    expect(normalPokemon.isEffectiveAgainst(grassPokemon)).toBe(false);
    expect(normalPokemon.isEffectiveAgainst(normalPokemon2)).toBe(false);
    expect(normalPokemon.isEffectiveAgainst(firePokemon)).toBe(false);
  });

  test("isWeakTo test, normal is not weak", () => {
    const firePokemon = new Fire("Flash");
    const grassPokemon = new Grass("Cow");
    const waterPokemon = new Water("Fishy");
    const normalPokemon = new Normal("Joker");
    const normalPokemon2 = new Normal("Joker reborn");

    expect(normalPokemon.isWeakTo(waterPokemon)).toBe(false);
    expect(normalPokemon.isWeakTo(grassPokemon)).toBe(false);
    expect(normalPokemon.isWeakTo(normalPokemon2)).toBe(false);
    expect(normalPokemon.isWeakTo(firePokemon)).toBe(false);
  });
});

describe("Pokemon species", () => {
  test("Check if Charmander is a child of Fire and Pokemon", () => {
    const charmander = new Charmander();
    expect(charmander).toBeInstanceOf(Fire);
    expect(charmander).toBeInstanceOf(Pokemon);
  });
  test("Check if Charmander has a move called ember", () => {
    const charmander = new Charmander();
    expect(charmander.move).toBe("ember");
  });
  test("Check if Squirtle has a move called water gun", () => {
    const squirtle = new Squirtle();
    expect(squirtle.move).toBe("water gun");
  });
  test("Check if Bulbasaur has a move called vine whip", () => {
    const bulbasaur = new Bulbasaur();
    expect(bulbasaur.move).toBe("vine whip");
  });
  test("Check if Rattata has a property of hit points", () => {
    const rattata = new Rattata("Ratatuie", 33, 22, "cooking");
    const raty = new Rattata("Ratatuie", 20, 22, "cooking");
    rattata.takeDamage(5);
    const attack = rattata.useMove();
    expect(rattata.hitPoints).toBe(28);
    expect(attack).toBe(22);
  });

  test("check if Fire has property move", () => {
    const hot = new Fire("spicey", 22, 10);
    console.log(hot.name);
    console.log(hot.hitPoints);
    console.log(hot.attackDamage);
    console.log(hot.move);
    console.log(hot.hitPoints > 10); // Console.log( 22 < 10) // console.log(false)
    // <, >, <=,>=,===
    console.log("a" !== "b");
  });
});
describe("Pokeball", () => {
  test("Making sure the Pokeball is empty", () => {
    const firePokemon = new Fire();
    const pokeball = new Pokeball();
    expect(pokeball.pokemon).toBe(undefined);
    console.log(firePokemon.pokemon);
  });

  test("If the Pokeball already has a Pokemon", () => {
    const firePokemon = new Fire();
    const pokeball = new Pokeball(firePokemon);
    expect(pokeball.pokemon).toBe(firePokemon);
    console.log(firePokemon.pokemon);
  });

  test("Throwing empty ball", () => {
    const firePokemon = new Fire();
    const pokeball = new Pokeball();
    pokeball.throw();
    // expect(pokeball.pokemon).toBe(firePokemon)
  });

  test("Checking the console output", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const firePokemon = new Fire("Spicey");
    const pokeball = new Pokeball(firePokemon);
    pokeball.throw();
    expect(consoleSpy).toHaveBeenCalledWith("GO Spicey");
  });

  test("Checking the console output when there is no pokemon in the pokeball", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const firePokemon = new Fire();
    const pokeball = new Pokeball();
    pokeball.throw();
    expect(consoleSpy).toHaveBeenCalledWith(
      "I'm so sorry my friend there is no pokemon"
    );
  });

  test("Checking the console output when there is a pokemon passed into the Pokeball", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const waterPokemon = new Water("Mermaid");
    const pokeball = new Pokeball();
    pokeball.throw(waterPokemon);
    expect(consoleSpy).toHaveBeenCalledWith("You caught Mermaid");
  });

  test("Verifying the Pokeball will not catch another Pokemon as one is already in", () => {
    const firePokemon = new Fire("Spicey");
    const waterPokemon = new Water("Mermaid");
    const pokeball = new Pokeball(firePokemon);
    pokeball.throw(waterPokemon);
    expect(pokeball.pokemon).toBe(firePokemon);
  });

  test("Should return false when there is Pokemon inside the Pokeball", () => {
    const waterPokemon = new Water("Mermaid");
    const pokeball = new Pokeball(waterPokemon);
    expect(pokeball.isEmpty()).toBe(false);
  });
  test("Should return true when there is no Pokemon inside the Pokeball", () => {
    const waterPokemon = new Water("Mermaid");
    const pokeball = new Pokeball();
    expect(pokeball.isEmpty()).toBe(true);
  });

  test("Should return empty... when there is no Pokemon inside the Pokeball", () => {
    const waterPokemon = new Water("Mermaid");
    const pokeball = new Pokeball();
    expect(pokeball.contains()).toBe("empty...");
  });
  test("Should return Pokemon's name when there is a Pokemon inside the Pokeball", () => {
    const waterPokemon = new Water("Mermaid");
    const pokeball = new Pokeball(waterPokemon);
    expect(pokeball.contains()).toBe("Mermaid");
  });
});

describe("Trainer", () => {
  test("Checking if the Trainer has a belt", () => {
    const bruceLee = new Trainer();
    console.log(bruceLee);
    expect(bruceLee.belt).toEqual([]);
  });
  test("input an empty pokeball to the belt", () => {
    const bruceLee = new Trainer();
    const pokeball = new Pokeball();
    bruceLee.addPokeBalls(pokeball);
    expect(bruceLee.belt[0]).toBe(pokeball);
  });

  test("input a pokeball with a pokemon to the belt", () => {
    const bruceLee = new Trainer();
    const waterPokemon = new Water("Mermaid", 10, 4);
    const pokeball = new Pokeball(waterPokemon);
    bruceLee.addPokeBalls(pokeball);
    expect(bruceLee.belt[0].pokemon.name).toBe("Mermaid");
  });

  test("input two pokeballs with pokemons to the belt", () => {
    const bruceLee = new Trainer();
    const waterPokemon = new Water("Mermaid", 10, 4);
    const pokeball = new Pokeball(waterPokemon);
    const firePokemon = new Fire("Spicey", 20, 3);
    const pokeball2 = new Pokeball(firePokemon);
    bruceLee.addPokeBalls(pokeball);
    bruceLee.addPokeBalls(pokeball2);
    expect(bruceLee.belt[0].pokemon.name).toBe("Mermaid");
    expect(bruceLee.belt[1].pokemon.name).toBe("Spicey");
  });

  test("implements the throw method when catch method is used", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const bruceLee = new Trainer();
    const waterPokemon = new Water("Mermaid", 10, 4);
    const firePokemon = new Fire("Spicey", 20, 3);
    const pokeball = new Pokeball(waterPokemon);
    const pokeball2 = new Pokeball();
    bruceLee.addPokeBalls(pokeball);
    bruceLee.addPokeBalls(pokeball2);
    bruceLee.catch(firePokemon);
    expect(consoleSpy).toHaveBeenCalledWith("You caught Spicey");
  });

  test("implements the throw method when catch method is used", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const bruceLee = new Trainer();
    const waterPokemon = new Water("Mermaid", 10, 4);
    const firePokemon = new Fire("Spicey", 20, 3);
    const grassPokemon = new Grass("Moo", 30, 5);
    const pokeball = new Pokeball(waterPokemon);
    const pokeball2 = new Pokeball(firePokemon);
    bruceLee.addPokeBalls(pokeball);
    bruceLee.addPokeBalls(pokeball2);
    bruceLee.catch(grassPokemon);
    // expect(consoleSpy).toHaveBeenCalledWith("You caught Spicey")
  });
});

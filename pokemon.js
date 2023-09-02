class Pokemon {
  constructor(
    input_name,
    input_hitPoints,
    input_attackDamage,
    input_move = "tackle"
  ) {
    // Class Properties -------------------------------------------------------
    this.name = input_name;
    this.hitPoints = input_hitPoints;
    this.attackDamage = input_attackDamage;
    this.move = input_move;
  }
  // Class Methods ----------------------------------------------------------
  takeDamage(num) {
    this.hitPoints -= num;
  }

  useMove() {
    console.log(`${this.name} used ${this.name}'s ${this.move}`);
    // console.log( this.name + " used " + this.name + "'s " + this.move)
    return this.attackDamage;
  }

  hasFainted() {
    // will return a boolean as (this.hitPoints <= 0)
    // will be evaluated before being returned
    return this.hitPoints <= 0;
  }
}

class Fire extends Pokemon {
  constructor(input_name, input_hitPoints, input_attackDamage, input_move) {
    super(input_name, input_hitPoints, input_attackDamage, input_move);
    // Super uses the Parent constructor ---------------------------
    // this.name = name;
    // this.hitPoints = hitPoints;
    // this.attackDamage = attackDamage;
    // this.move = move;
    this.type = "fire";
  }

  isEffectiveAgainst(pokemon) {
    return pokemon.type === "grass";
  }

  isWeakTo(pokemon) {
    return pokemon.type === "water";
  }
}

class Charmander extends Fire {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.move = "ember";
  }
}

class Water extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "water";
  }

  isEffectiveAgainst(pokemon) {
    return pokemon.type === "fire";
  }

  isWeakTo(pokemon) {
    return pokemon.type === "grass";
  }
}

class Squirtle extends Water {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.move = "water gun";
  }
}

class Grass extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "grass";
  }

  isEffectiveAgainst(pokemon) {
    return pokemon.type === "water";
  }

  isWeakTo(pokemon) {
    return pokemon.type === "fire";
  }
}

class Bulbasaur extends Grass {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.move = "vine whip";
  }
}
class Normal extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "normal";
  }

  isEffectiveAgainst(pokemon) {
    return false;
  }

  isWeakTo(pokemon) {
    return false;
  }
}

class Rattata extends Normal {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
  }
}

class Pokeball {
  constructor(input_pokemon) {
    this.pokemon = input_pokemon;
  }

  throw(captured_pokemon) {
    if (arguments.length === 0) {
      // No pokemon passed in and empty ball

      if (this.pokemon === undefined) {
        // check if we have a pokemon in ball
        console.log("I'm so sorry my friend there is no pokemon");
      } else {
        // if there is a pokemon in the ball
        console.log(`GO ${this.pokemon.name}`);
        return this.pokemon;
      }

      // there is a pokemon passed into the ball
    } else {
      // if there is no pokemon then we capture it
      if (this.pokemon === undefined) {
        this.pokemon = captured_pokemon;
        console.log(`You caught ${this.pokemon.name}`);
      }
    }
  }

  isEmpty() {
    return this.pokemon === undefined;
  }

  contains() {
    if (this.pokemon === undefined) {
      return "empty...";
    } else {
      return this.pokemon.name;
    }
  }
}

class Trainer {
  constructor(belt = []) {
    this.belt = belt;
  }

  addPokeBalls(input_pokeBalls) {
    if (this.belt.length < 6) {
      this.belt.push(input_pokeBalls);
    }
  }

  catch(input_pokemon) {
    if (this.belt.length === 0) {
      // no pokeball cant do anything
    } else {
      //there can be 1-6 pokeball on the belt
      // therefore pick a random pokeball
      //let randBelt = Math.floor(Math.random() * this.belt.length)
      this.belt[this.belt.length - 1].throw(input_pokemon);
    }
  }
}

module.exports = {
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
};

// Trainer
// A Trainer should have a belt property which can store up to 6 Pokeballs. The datatype of the belt is up to you to decide.
// Methods
// catch

// Takes a Pokemon as an argument.
// It should use one of its empty Pokeball's throw method to catch the Pokemon.
// Should do something if you don't have any empty Pokeballs, what and how is up to you.
// getPokemon

// Takes the name of a Pokemon.
// Will search for the the Pokemon with that name in the belt.
// Use the Pokeball's throw to return that specific Pokemon.

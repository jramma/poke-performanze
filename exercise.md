# 🎮 Poke-Performanze Challenge!!

Hello, and welcome to our coding challenge! In this opportunity, we want to implement a simple web-based Pokémon game.

---

## 🗺️ Game Premise

The game consists of catching the original **151 Pokémon** following these rules:

*   **Registration**: The game is free to play, but users must register. *Don't worry about authentication for now.*
*   **Home Page (Pokedex)**: Once logged in, users should see their currently caught Pokémon.
*   **Daily Mini-game**:
    *   A button allows playing the daily catch game.
    *   Each day, a random Pokémon (from the original 151) appears.
    *   The user has **6 Pokéballs** to attempt the catch.
*   **Catch Mechanics**:
    *   Throwing a Pokéball has a **25% success rate**.
    *   If you run out of Pokéballs, the Pokémon escapes.
    *   Users must wait until the next day for another chance.

---

## 🛠️ Technical Considerations

*   **Stack**: We want to stick with the JS ecosystem, specifically **TypeScript**.
*   **Data Source**: Use the [PokéAPI](https://pokeapi.co/) to retrieve all the info you might need.
    > [!NOTE]
    > The API is modern and contains more than the original 151 Pokémon! Ensure you filter correctly.
*   **Testing**: We would love to see a solid test suite.
*   **Deployment**: Implement a single-command launch (e.g., `docker compose up` or similar).

The challenge has been made intentionally simple, but we will have a technical discussion and potential iterations based on it.

---

## 📨 How to Submit

Once the challenge is ready:
1. Upload it to a **private git repo**.
2. Send an invitation to **@ItsMacGyver**.

Good luck! 🍀
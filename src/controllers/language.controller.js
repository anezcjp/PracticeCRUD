import { getConnection } from "./../database/database";

const getLanguages = async (req, res) => {
  try {
    console.log("esta entrando en get/");
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT id, name, programmers FROM language"
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getLanguage = async (req, res) => {
  try {
    console.log("esta entrando en get lenguajes/");

    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT id, name, programmers FROM language WHERE id = ?",
      id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addLanguage = async (req, res) => {
  try {
    console.log("esta entrando en add lenguajes/");

    const { name, programmers } = req.body;

    if (name === undefined || programmers === undefined) {
      res.status(400).json({ message: "Name and programming are required" });
    }
    const language = { name, programmers };
    const connection = await getConnection();
    await connection.query("INSERT INTO language SET ?", language);
    res.json({ message: "Language added successfully" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const updateLanguage = async (req, res) => {
  try {
    console.log("esta entrando en update lenguajes/");


    const { id } = req.params;
    const { name, programmers } = req.body;

    if (id === undefined || name === undefined || programmers === undefined) {
      res.status(400).json({ message: "Name and programming are required" });
    }

    const language = { id, name, programmers };
    const connection = await getConnection();
    const result = await connection.query("UPDATE language SET ? WHERE id= ?", [
      language,
      id,
    ]);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteLanguage = async (req, res) => {
  try {
    console.log("esta entrando en delete lenguajes/");

    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM language WHERE id = ?",
      id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getLanguages,
  getLanguage,
  addLanguage,
  deleteLanguage,
  updateLanguage,
};

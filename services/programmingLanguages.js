const db = require("./db");

// GET PROGRAMMING LANGUAGES
const getMultiple = async () => {
  const result = await db(
    `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank FROM programming_languages`
  );

  return result;
};

// GET A PROGRAMMING LANGUAGE
const getSimple = async (id) => {
  const result = await db(
    `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank FROM programming_languages WHERE id=${id}`
  );

  return result;
};

// POST PROGRAMMING LANGUAGE
const create = async (programmingLanguage) => {
  const result = await db(
    `INSERT INTO programming_languages (name, released_year, githut_rank, pypl_rank, tiobe_rank) VALUES ('${programmingLanguage.name}', ${programmingLanguage.released_year}, ${programmingLanguage.githut_rank}, ${programmingLanguage.pypl_rank}, ${programmingLanguage.tiobe_rank})`
  );

  let message = "Error in creating programming language";

  if (result.affectedRows) {
    message = "Programming language created successfully";
  }

  return { message };
};

// PUT PROGRAMMING LANGUAGE
const update = async (id, programmingLanguage) => {
  const result = await db(
    `UPDATE programming_languages SET name="${programmingLanguage.name}"
    WHERE id=${id}`
  );

  let message = "Error in updating programming language";

  if (result.affectedRows) {
    message = "Programming language updated successfully";
  }

  return { message };
};

// DELETE PROGRAMMING LANGUAGE
const remove = async (id) => {
  const result = await db(`DELETE FROM programming_languages WHERE id=${id}`);

  let message = "Error in deleting programming language";

  if (result.affectedRows) {
    message = "Programming language deleted successfully";
  }

  return { message };
};

module.exports = { getMultiple, getSimple, create, update, remove };

export const addCartToServer = async (code, addOrMinus) => {
  try {
    const res = await fetch(
      `http://localhost:8080/add-basket?id=${code}&addOrMinus=${addOrMinus}`
    );

    if (!res.ok) {
      throw new Error(`error occured, status = ${res.status}`);
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteCartToServer = async (code) => {
  try {
    const res = await fetch(`http://localhost:8080/delete-basket?id=${code}`);
    if (!res.ok) {
      throw new Error(`error occured`);
    }
  } catch (error) {
    console.error(error);
  }
};

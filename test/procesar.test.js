import test from "node:test";
import assert from "node:assert/strict";
import handler from "../api/procesar.js";

test("procesar convierte el nombre a mayúsculas", () => {
  const req = { query: { nombre: "juan" } };

  const res = {
    statusCode: null,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    }
  };

  handler(req, res);

  assert.equal(res.statusCode, 200);
assert.deepEqual(res.body, {
  resultado: "Nombre procesado: JUAN",
  longitud: 4
});
});


test("procesar maneja nombre ausente", () => {
  const req = { query: {} };

  const res = {
    statusCode: null,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    }
  };

  handler(req, res);

  assert.equal(res.statusCode, 200);
  assert.ok(res.body.resultado.includes("ANÓNIMO"));
});

test("calidad: JSON consistente y resultado en MAYÚSCULAS", () => {
  const req = { query: { nombre: "JuAn pérez" } };

  const res = {
    statusCode: null,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    }
  };

  handler(req, res);

  assert.equal(res.statusCode, 200);

  assert.ok(res.body && typeof res.body === "object");

  const keys = Object.keys(res.body).sort();
  assert.deepEqual(keys, ["longitud", "resultado"]);

  assert.equal(typeof res.body.resultado, "string");
  assert.equal(typeof res.body.longitud, "number");

  assert.match(res.body.resultado, /^Nombre procesado:\s[A-ZÁÉÍÓÚÜÑ\s]+$/);

  assert.equal(res.body.longitud, "JuAn pérez".length);
});


import { useState } from "react";

function Gronsfeld() {
  const [plainText, setPlainText] = useState("");
  const [key, setKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");

  const isValidKey = (key: string): boolean => {
    return /^[0-9]+$/.test(key) && key.length > 0;
  };

  const gronsfeld_encrypt = (text: string, key: string): string => {
    if (!text || !key) return "";

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i].toUpperCase();

      if (alphabet.includes(char)) {
        const charIndex = alphabet.indexOf(char);
        const shift = parseInt(key[keyIndex % key.length]);
        const newIndex = (charIndex + shift) % 26;
        result += alphabet[newIndex];
        keyIndex++;
      } else {
        result += text[i];
      }
    }

    return result;
  };

  const gronsfeld_decrypt = (text: string, key: string): string => {
    if (!text || !key) return "";

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i].toUpperCase();

      if (alphabet.includes(char)) {
        const charIndex = alphabet.indexOf(char);
        const shift = parseInt(key[keyIndex % key.length]);
        const newIndex = (charIndex - shift + 26) % 26;
        result += alphabet[newIndex];
        keyIndex++;
      } else {
        result += text[i];
      }
    }

    return result;
  };

  const handleEncrypt = () => {
    if (!plainText.trim()) {
      alert("Por favor ingresa una frase para codificar");
      return;
    }

    if (!isValidKey(key)) {
      alert("La clave debe contener solo números (ej: 12345)");
      return;
    }

    const encrypted = gronsfeld_encrypt(plainText, key);
    setEncryptedText(encrypted);
  };

  const handleDecrypt = () => {
    if (!encryptedText.trim()) {
      alert("No hay texto cifrado para descifrar");
      return;
    }

    if (!isValidKey(key)) {
      alert("La clave debe contener solo números (ej: 12345)");
      return;
    }

    const decrypted = gronsfeld_decrypt(encryptedText, key);
    alert(`Texto descifrado: ${decrypted}`);
  };

  const handleClear = () => {
    setPlainText("");
    setKey("");
    setEncryptedText("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">
          Cifrado Gronsfeld
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Interfaz de Entrada
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Frase a ser codificada:
                </label>
                <textarea
                  value={plainText}
                  onChange={(e) => setPlainText(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  rows={4}
                  placeholder="Ingresa el texto que deseas cifrar..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Clave de Cifrado (solo números):
                </label>
                <input
                  type="text"
                  value={key}
                  onChange={(e) =>
                    setKey(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Ej: 12345"
                />
                <p className="text-xs text-gray-500 mt-1">
                  La clave debe contener solo números (ej: 12345, 987)
                </p>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={handleEncrypt}
                  className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200 font-medium"
                >
                  Cifrar
                </button>
                <button
                  onClick={handleDecrypt}
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200 font-medium"
                  disabled={!encryptedText}
                >
                  Descifrar
                </button>
                <button
                  onClick={handleClear}
                  className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200 font-medium"
                >
                  Limpiar
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Interfaz de Salida
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Frase Sin Codificar:
                </label>
                <div className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md min-h-[100px]">
                  <p className="text-gray-700">
                    {plainText || "Texto original aparecerá aquí..."}
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Clave de Cifrado:
                </label>
                <div className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md">
                  <p className="text-gray-700 font-mono">
                    {key || "Clave aparecerá aquí..."}
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Frase Codificada:
                </label>
                <div className="w-full p-3 bg-indigo-50 border border-indigo-200 rounded-md min-h-[100px]">
                  <p className="text-indigo-800 font-mono break-all">
                    {encryptedText || "Texto cifrado aparecerá aquí..."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            ¿Cómo funciona el Cifrado Gronsfeld?
          </h3>
          <div className="text-gray-600 space-y-2">
            <p>
              El cifrado Gronsfeld es una variante del cifrado de Vigenère que
              utiliza una clave numérica en lugar de una clave alfabética.
            </p>
            <p>
              <strong>Proceso:</strong> Cada letra del texto se desplaza en el
              alfabeto según el número correspondiente en la clave. Si la clave
              es más corta que el texto, se repite cíclicamente.
            </p>
            <p>
              <strong>Ejemplo:</strong> Con la clave "123" y el texto "HOLA", H
              se desplaza 1 posición → I, O se desplaza 2 posiciones → Q, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gronsfeld;

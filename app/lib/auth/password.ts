import { hash, compare } from 'bcryptjs';

const SALT_ROUNDS = 12;

/**
 * Hashea una contraseña en texto plano para guardarla en la base de datos.
 * Usa bcrypt con salt rounds adecuados para producción.
 */
export async function hashPassword(plainPassword: string): Promise<string> {
  return hash(plainPassword, SALT_ROUNDS);
}

/**
 * Comprueba si la contraseña en texto plano coincide con el hash guardado.
 */
export async function verifyPassword(
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return compare(plainPassword, hashedPassword);
}

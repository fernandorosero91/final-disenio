export function formatPrice(n: number): string {
  return '$' + n.toLocaleString('es-AR');
}

export function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

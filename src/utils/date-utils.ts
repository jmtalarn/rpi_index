export const timestampToDateString = (date: number) => new Date(date).toISOString().split('T')[0];

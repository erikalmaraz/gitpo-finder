export default interface PaginationType {
  totalItems: number;
  theme: string;
  nextPage: () => void;
  prevPage: () => void;
}

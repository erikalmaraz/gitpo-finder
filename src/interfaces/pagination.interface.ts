export default interface PaginationType {
  totalItems: number;
  nextPage: () => void;
  prevPage: () => void;
}

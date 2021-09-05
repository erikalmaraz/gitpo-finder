export default interface PaginationType {
  totalItems: number;
  showing: number;
  nextPage: () => void;
  prevPage: () => void;
}

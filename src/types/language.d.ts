export default interface Language {
  readonly id: number;
  readonly name: string;
  readonly code: string;
  readonly createdAt: Date;
  readonly updatedAt?: string;
}

export interface FormattedLanguage {
  readonly id: number;
  readonly name: string;
  readonly code: string;
  readonly createdAt: string[];
  readonly updatedAt?: string;
}

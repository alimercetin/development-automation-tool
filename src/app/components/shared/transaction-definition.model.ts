export class TransactionDefinition {
  public moduleName: string;
  public transactionType: string;
  public confirmCompositionName: string;
  public executeCompositionName: string;
  public path: string;
  public HasApproval: boolean;
  public HasDocumentControl: boolean;

  constructor() {}
}

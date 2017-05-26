export class TransactionDefinition {
  private _moduleName: string;
  private _transactionType: string;
  private _confirmCompositionName: string;
  private _executeCompositionName: string;
  private _path: string;
  private _hasApproval: boolean;
  private _hasDocumentControl: boolean;

    getModuleName(): string {
        return this._moduleName;
    }

    setModuleName(value: string) {
        this._moduleName = value;
    }

    getTransactionType(): string {
        return this._transactionType;
    }

    setTransactionType(value: string) {
        this._transactionType = value;
    }

    getConfirmCompositionName(): string {
        return this._confirmCompositionName;
    }

    setConfirmCompositionName(value: string) {
        this._confirmCompositionName = value;
    }

    getExecuteCompositionName(): string {
        return this._executeCompositionName;
    }

    setExecuteCompositionName(value: string) {
        this._executeCompositionName = value;
    }

    getPath(): string {
        return this._path;
    }

    setPath(value: string) {
        this._path = value;
    }

    getHasApproval(): boolean {
        return this._hasApproval;
    }

    setHasApproval(value: boolean) {
        this._hasApproval = value;
    }

    getHasDocumentControl(): boolean {
        return this._hasDocumentControl;
    }

    setHasDocumentControl(value: boolean) {
        this._hasDocumentControl = value;
    }

  constructor() {}
}

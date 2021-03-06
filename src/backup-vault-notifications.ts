// https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupVaultNotificationsConfig extends cdktf.TerraformMetaArguments {
  readonly backupVaultEvents: string[];
  readonly backupVaultName: string;
  readonly snsTopicArn: string;
}

// Resource

export class BackupVaultNotifications extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BackupVaultNotificationsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_backup_vault_notifications',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backupVaultEvents = config.backupVaultEvents;
    this._backupVaultName = config.backupVaultName;
    this._snsTopicArn = config.snsTopicArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_vault_arn - computed: true, optional: false, required: false
  public get backupVaultArn() {
    return this.getStringAttribute('backup_vault_arn');
  }

  // backup_vault_events - computed: false, optional: false, required: true
  private _backupVaultEvents: string[];
  public get backupVaultEvents() {
    return this.getListAttribute('backup_vault_events');
  }
  public set backupVaultEvents(value: string[]) {
    this._backupVaultEvents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupVaultEventsInput() {
    return this._backupVaultEvents
  }

  // backup_vault_name - computed: false, optional: false, required: true
  private _backupVaultName: string;
  public get backupVaultName() {
    return this.getStringAttribute('backup_vault_name');
  }
  public set backupVaultName(value: string) {
    this._backupVaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupVaultNameInput() {
    return this._backupVaultName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sns_topic_arn - computed: false, optional: false, required: true
  private _snsTopicArn: string;
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
  public set snsTopicArn(value: string) {
    this._snsTopicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnInput() {
    return this._snsTopicArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_vault_events: cdktf.listMapper(cdktf.stringToTerraform)(this._backupVaultEvents),
      backup_vault_name: cdktf.stringToTerraform(this._backupVaultName),
      sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
    };
  }
}

// https://www.terraform.io/docs/providers/aws/r/data_aws_network_acls.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsNetworkAclsConfig extends TerraformMetaArguments {
  readonly tags?: { [key: string]: string };
  readonly vpcId?: string;
  /** filter block */
  readonly filter?: DataAwsNetworkAclsFilter[];
}
export interface DataAwsNetworkAclsFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsNetworkAcls extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsNetworkAclsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_network_acls',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ids - computed: true, optional: false, required: true
  public get ids() {
    return this.getListAttribute('ids');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string;
  public get vpcId() {
    return this._vpcId;
  }
  public set vpcId(value: string | undefined) {
    this._vpcId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsNetworkAclsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsNetworkAclsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      tags: this._tags,
      vpc_id: this._vpcId,
      filter: this._filter,
    };
  }
}
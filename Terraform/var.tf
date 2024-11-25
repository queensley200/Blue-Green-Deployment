variable "cidr_block" {
  description = "For VPC cidr_block"
  default     = "10.0.0.0/16"
  type        = string
}

variable "security_group_name" {
  type = string
}

variable "subnet_cidr_block" {
  type = string
}

variable "instance_type" {
  type = string
}
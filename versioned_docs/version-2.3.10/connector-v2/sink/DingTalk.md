import ChangeLog from '../changelog/connector-dingtalk.md';

# DingTalk

> DinkTalk sink connector

## Support Those Engines

> Spark<br/>
> Flink<br/>
> SeaTunnel Zeta<br/>

## Key features

- [ ] [exactly-once](../../concept/connector-v2-features.md)

## Description

A sink plugin which use DingTalk robot send message

## Options

|      name      |  type  | required | default value |
|----------------|--------|----------|---------------|
| url            | String | yes      | -             |
| secret         | String | yes      | -             |
| common-options |        | no       | -             |

### url [String]

DingTalk robot address format is https://oapi.dingtalk.com/robot/send?access_token=XXXXXX（String）

### secret [String]

DingTalk robot secret (String)

### common options

Sink plugin common parameters, please refer to [Sink Common Options](../sink-common-options.md) for details

## Example

```hocon
sink {
 DingTalk {
  url="https://oapi.dingtalk.com/robot/send?access_token=ec646cccd028d978a7156ceeac5b625ebd94f586ea0743fa501c100007890"
  secret="SEC093249eef7aa57d4388aa635f678930c63db3d28b2829d5b2903fc1e5c10000"
 }
}
```

## Changelog

<ChangeLog />


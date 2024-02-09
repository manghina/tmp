import { Progress, Space } from "antd"

export const ProgressBar = ({ progress }: { progress: number }) => {
    return (
    <Space wrap>
        <Progress type="circle" percent={progress} />
      </Space>
    )
}

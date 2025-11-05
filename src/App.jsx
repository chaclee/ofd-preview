import React, { useState, useRef } from 'react'
import { Layout, Card, Upload, Button, Typography, Space, message, Spin } from 'antd'
import { InboxOutlined, FileTextOutlined, ReloadOutlined } from '@ant-design/icons'
import './App.css'

const { Header, Content, Footer } = Layout
const { Title, Text } = Typography
const { Dragger } = Upload

function App() {
  const [loading, setLoading] = useState(false)
  const [fileName, setFileName] = useState('')
  const containerRef = useRef(null)

  const handleFileChange = async (info) => {
    const { file } = info

    if (file.status === 'uploading') {
      return
    }

    setLoading(true)
    setFileName(file.name)

    try {
      const arrayBuffer = await file.originFileObj.arrayBuffer()

      // Clear previous content
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }

      // Parse and render OFD document using the global ofd library
      if (window.ofd && window.ofd.renderOfd) {
        await window.ofd.renderOfd(arrayBuffer, {
          element: containerRef.current
        })
        message.success(`${file.name} 加载成功！`)
      } else {
        throw new Error('OFD 库未加载')
      }
    } catch (error) {
      console.error('Error loading OFD file:', error)
      message.error(`加载失败: ${error.message}`)
    } finally {
      setLoading(false)
    }

    return false
  }

  const handleReset = () => {
    if (containerRef.current) {
      containerRef.current.innerHTML = ''
    }
    setFileName('')
    message.info('已重置')
  }

  const uploadProps = {
    name: 'file',
    accept: '.ofd',
    multiple: false,
    showUploadList: false,
    beforeUpload: () => false,
    onChange: handleFileChange,
  }

  return (
    <Layout className="layout">
      <Header className="header">
        <div className="logo">
          <FileTextOutlined style={{ fontSize: '24px', marginRight: '12px' }} />
          <Title level={3} style={{ margin: 0, color: 'white' }}>
            OFD 文档预览
          </Title>
        </div>
      </Header>

      <Content className="content">
        <div className="content-wrapper">
          <Card className="upload-card" bordered={false}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <Dragger {...uploadProps}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">点击或拖拽 OFD 文件到此区域</p>
                <p className="ant-upload-hint">
                  支持 .ofd 格式文件，单次只能上传一个文件
                </p>
              </Dragger>

              {fileName && (
                <div className="file-info">
                  <Text type="secondary">当前文件: </Text>
                  <Text strong>{fileName}</Text>
                  <Button
                    type="link"
                    icon={<ReloadOutlined />}
                    onClick={handleReset}
                  >
                    重置
                  </Button>
                </div>
              )}
            </Space>
          </Card>

          <Card
            className="preview-card"
            bordered={false}
            title="文档预览"
          >
            <Spin spinning={loading} tip="加载中...">
              <div
                ref={containerRef}
                className="ofd-container"
                style={{ minHeight: '600px' }}
              />
            </Spin>
          </Card>
        </div>
      </Content>

      <Footer className="footer">
        <Text type="secondary">
          OFD Preview © {new Date().getFullYear()} - 基于 Ant Design 构建
        </Text>
      </Footer>
    </Layout>
  )
}

export default App

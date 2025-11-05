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

    // Get the actual file object
    const actualFile = file.originFileObj || file

    // Skip if file is not ready
    if (!actualFile || file.status === 'uploading') {
      return
    }

    setLoading(true)
    setFileName(actualFile.name || file.name)

    try {
      // Use the OFD library API as in the original code
      if (!window.ofd || !window.ofd.parseOfdDocument) {
        throw new Error('OFD 库未加载')
      }

      window.ofd.parseOfdDocument({
        ofd: actualFile,
        success: function (res) {
          try {
            const screenWidth = 800
            const ofdRenderRes = window.ofd.renderOfd(screenWidth, res[0])

            // Clear previous content
            if (containerRef.current) {
              containerRef.current.innerHTML = ''

              // Append all rendered elements
              for (const item of ofdRenderRes) {
                containerRef.current.appendChild(item)
              }
            }

            message.success(`${actualFile.name || file.name} 加载成功！`)
          } catch (error) {
            console.error('Error rendering OFD:', error)
            message.error(`渲染失败: ${error.message}`)
          } finally {
            setLoading(false)
          }
        },
        fail: function (err) {
          console.error('Error parsing OFD:', err)
          message.error(`解析失败: ${err.message || '未知错误'}`)
          setLoading(false)
        }
      })
    } catch (error) {
      console.error('Error loading OFD file:', error)
      message.error(`加载失败: ${error.message}`)
      setLoading(false)
    }
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
        <div className="header-content">
          <div className="logo">
            <FileTextOutlined style={{ fontSize: '28px' }} />
            <Title level={3} style={{ margin: 0, color: 'white' }}>
              OFD 在线预览
            </Title>
          </div>

          {fileName && (
            <div className="header-file-info">
              <Text style={{ color: 'rgba(255, 255, 255, 0.85)', marginRight: '8px' }}>
                {fileName}
              </Text>
              <Button
                size="small"
                icon={<ReloadOutlined />}
                onClick={handleReset}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  color: 'white'
                }}
              >
                重置
              </Button>
            </div>
          )}
        </div>
      </Header>

      <Content className="content">
        <div className="content-wrapper">
          {!fileName ? (
            <div className="upload-section">
              <Dragger {...uploadProps} className="upload-dragger">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">点击或拖拽 OFD 文件到此区域上传</p>
                <p className="ant-upload-hint">
                  支持 .ofd 格式文件
                </p>
              </Dragger>
            </div>
          ) : (
            <Card
              className="preview-card"
              bordered={false}
              bodyStyle={{ padding: '16px' }}
            >
              <Spin spinning={loading} tip="加载中...">
                <div
                  ref={containerRef}
                  className="ofd-container"
                />
              </Spin>
            </Card>
          )}
        </div>
      </Content>
    </Layout>
  )
}

export default App

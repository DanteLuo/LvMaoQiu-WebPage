import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

# 创建球体
phi = np.linspace(0, np.pi, 30)
theta = np.linspace(0, 2 * np.pi, 30)
phi, theta = np.meshgrid(phi, theta)

x = np.sin(phi) * np.cos(theta)
y = np.sin(phi) * np.sin(theta)
z = np.cos(phi)

# 添加随机噪声以生成“毛球”效果
noise = 0.2 * (np.random.rand(*x.shape) - 0.5)
x += noise
y += noise
z += noise

# 绘制图像
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
ax.plot_surface(x, y, z, color='green', edgecolor='black')

# 去掉坐标轴和背景框
ax.axis('off')

# 保存为透明背景图片
plt.savefig('green_fuzzy_ball.png', transparent=True, dpi=300)
plt.show()

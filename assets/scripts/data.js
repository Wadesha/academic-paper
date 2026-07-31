// 模拟学术论文数据
// 结构:fields[] -> papers[] -> sections[](含图片占位说明)
window.PAPER_DATA = {
  site: {
    name: 'Academic Paper Hub',
    tagline: '模拟各学术领域的论文目录与内容',
    description:
      '本站为演示用途,收录计算机科学、物理学、生命科学、社会科学与人文学科等领域的模拟论文。文本为主,图片位置以占位区块呈现。'
  },
  fields: [
    {
      id: 'cs',
      name: '计算机科学',
      enName: 'Computer Science',
      description:
        '研究计算的理论基础以及如何在计算机系统中实现和应用计算的学科,涵盖算法、系统、人工智能等方向。',
      cover: '计算机科学领域封面占位',
      subfields: ['机器学习', '分布式系统', '信息安全', '人机交互'],
      papers: [
        {
          id: 'cs-001',
          title: '面向大规模图数据的分布式表示学习框架',
          authors: ['张明远', '李清'],
          year: 2024,
          venue: 'Journal of Computer Research',
          keywords: ['图神经网络', '分布式训练', '表示学习'],
          abstract:
            '本文提出一种面向大规模图数据的分布式表示学习框架 Graft-D,通过子图切分与异步参数服务器协同,在十亿级节点图上实现高效训练。实验表明,在保留表征质量的前提下,训练吞吐量较基线提升 3.2 倍。',
          sections: [
            {
              title: '1. 引言',
              content:
                '图结构数据广泛存在于社交网络、知识图谱与生物分子网络中。随着数据规模增长,单机训练难以满足需求,分布式图学习成为研究热点。本文围绕参数同步瓶颈展开分析,并提出 Graft-D 框架。',
              image: '图 1:Graft-D 总体架构示意'
            },
            {
              title: '2. 相关工作',
              content:
                '已有工作主要分为两类:基于图划分的方法与基于采样的小批量方法。前者关注通信开销,后者关注收敛速度。Graft-D 综合两者优势,在划分基础上引入异步更新。'
            },
            {
              title: '3. 方法',
              content:
                '我们将原图划分为 k 个子图,每个工作节点持有若干子图。参数服务器维护共享嵌入表,采用陈旧容忍的异步更新策略。为缓解陈旧梯度,引入动量校正项。',
              image: '图 2:子图划分与参数同步流程'
            },
            {
              title: '4. 实验',
              content:
                '我们在 ogbn-papers100M 与内部十亿节点图上进行实验。相比 GraphSAGE-PIPE,Graft-D 在 MRR 指标上保持持平,训练时间缩短 68%。'
            },
            {
              title: '5. 结论',
              content:
                'Graft-D 通过划分与异步协同,有效突破了大规模图训练的瓶颈。未来工作将探索动态划分与异构硬件适配。'
            }
          ],
          references: [
            'Hamilton W, et al. Inductive Representation Learning on Large Graphs. NeurIPS 2017.',
            'Chen M, et al. Pipelined Training of GNNs. KDD 2022.',
            '王立. 大规模图表示学习综述. 计算机学报, 2023.'
          ]
        },
        {
          id: 'cs-002',
          title: '基于形式化验证的微内核安全隔离机制',
          authors: ['陈思'],
          year: 2023,
          venue: 'Symposium on Operating Systems',
          keywords: ['微内核', '形式化验证', '隔离', '能力模型'],
          abstract:
            '本文提出一种基于能力模型与形式化验证的微内核隔离机制 VeriCap。通过将内核接口建模为状态机,并用定理证明器验证关键不变式,在性能损失低于 5% 的前提下杜绝了越权访问。',
          sections: [
            {
              title: '1. 引言',
              content:
                '微内核以最小特权原则设计,但接口复杂度使得传统测试难以覆盖所有路径。形式化验证提供了端到端的正确性保证,近年来在 seL4 等系统中得到应用。'
            },
            {
              title: '2. 能力模型',
              content:
                '我们将资源访问抽象为能力凭证,每个系统调用须携带有效能力。内核维护能力表,并在传递时执行衰减规则。',
              image: '图 1:能力传递与衰减规则'
            },
            {
              title: '3. 形式化建模',
              content:
                '使用 Isabelle/HOL 对内核状态机建模,定义 12 条不变式,涵盖能力唯一性、内存隔离与时序约束。'
            },
            {
              title: '4. 评估',
              content:
                '在 ARM64 平台上,VeriCap 的 IPC 延迟增加 4.7%,内存开销低于 3%。验证覆盖率可达 100% 的内核核心路径。'
            }
          ],
          references: [
            'Klein G, et al. seL4: Formal Verification of an OS Kernel. SOSP 2009.',
            'Levien R. Capability-based Security. 2019.'
          ]
        }
      ]
    },
    {
      id: 'physics',
      name: '物理学',
      enName: 'Physics',
      description:
        '研究物质、能量及其相互作用的基础学科,涵盖从基本粒子到宇宙尺度的现象。',
      cover: '物理学领域封面占位',
      subfields: ['凝聚态物理', '粒子物理', '天体物理', '光学'],
      papers: [
        {
          id: 'phy-001',
          title: '扭曲双层石墨烯中的关联平带与超导性',
          authors: ['刘宇', '赵雪'],
          year: 2024,
          venue: 'Physical Review B',
          keywords: ['魔角', '平带', '超导', '关联电子'],
          abstract:
            '本文在 1.1° 魔角附近的扭曲双层石墨烯中观测到平带关联态,并通过门电压调控实现超导圆顶。输运测量显示 Tc 约 1.7K,与理论预言一致。',
          sections: [
            {
              title: '1. 引言',
              content:
                '自 2018 年魔角双层石墨烯被发现具有超导性以来,平带物理成为凝聚态领域的焦点。本文系统研究关联平带的形成与超导相图。'
            },
            {
              title: '2. 样品制备',
              content:
                '采用“撕-叠”工艺,利用预制切角确保相对扭转角。通过拉曼映射筛选均匀区域,误差小于 0.05°。',
              image: '图 1:器件结构与扭转角表征'
            },
            {
              title: '3. 输运测量',
              content:
                '在 300 mK 恒温器中进行变温输运测量。当填充因子 ν=−2 时,电阻急剧下降,呈现超导转变。',
              image: '图 2:电阻-温度曲线与相图'
            },
            {
              title: '4. 讨论',
              content:
                '实验结果支持自旋涨落配对机制,但与纯声子配件仍存差异,需进一步研究同位素效应。'
            }
          ],
          references: [
            'Cao Y, et al. Unconventional superconductivity in magic-angle graphene. Nature 2018.',
            'Bistritzer R, MacDonald A. Moiré bands in twisted double-layer graphene. PNAS 2011.'
          ]
        },
        {
          id: 'phy-002',
          title: '中微子振荡中的 CP 破坏测量进展',
          authors: ['山本健一'],
          year: 2023,
          venue: 'Journal of High Energy Physics',
          keywords: ['中微子振荡', 'CP 破坏', '长基线实验'],
          abstract:
            '本文综述长基线中微子实验对 CP 破坏相位 δCP 的最新测量结果。T2K 与 NOvA 联合分析显示 δCP 接近 -π/2,排除 CP 守恒假设至 2σ 置信水平。',
          sections: [
            {
              title: '1. 引言',
              content:
                '物质-反物质不对称是宇宙学核心谜题,轻子部分的 CP 破坏可能通过中微子振荡体现。'
            },
            {
              title: '2. 实验装置',
              content:
                'T2K 利用 J-PARC 产生中微子束,送往 295 km 外的 Super-K 探测器;NOvA 基线 810 km。',
              image: '图 1:长基线实验布局示意'
            },
            {
              title: '3. 数据分析',
              content:
                '通过比较 νμ→νe 与反中微子模式的跃迁概率,提取 δCP。联合贝叶斯拟合给出后验分布。'
            },
            {
              title: '4. 展望',
              content:
                'Hyper-K 与 DUNE 将显著提升统计量,有望在 5σ 水平上确立 CP 破坏。'
            }
          ],
          references: [
            'Abe K, et al. (T2K). Constraint on CP violation. Nature 2020.',
            'Acero M, et al. (NOvA). New neutrino oscillation results. 2022.'
          ]
        }
      ]
    },
    {
      id: 'life',
      name: '生命科学',
      enName: 'Life Sciences',
      description:
        '研究生物体结构、功能、演化与生态的学科群,涵盖分子、细胞、个体到生态系统多个层次。',
      cover: '生命科学领域封面占位',
      subfields: ['分子生物学', '遗传学', '神经科学', '生态学'],
      papers: [
        {
          id: 'life-001',
          title: 'CRISPR-Cas12a 在水稻基因敲除中的脱靶效应分析',
          authors: ['王红', '周磊'],
          year: 2024,
          venue: 'Plant Biotechnology Journal',
          keywords: ['CRISPR', 'Cas12a', '脱靶', '水稻'],
          abstract:
            '本文系统评估 Cas12a 在水稻中的脱靶效应。通过 GUIDE-seq 与全基因组测序,在 12 个靶点中检出 3 个低频脱靶位点,均位于非编码区,未影响表型。',
          sections: [
            {
              title: '1. 引言',
              content:
                'CRISPR 基因编辑已在作物改良中广泛应用,但脱靶效应仍是监管关注焦点。Cas12a 因 PAM 特异性被认为比 Cas9 更安全。'
            },
            {
              title: '2. 材料与方法',
              content:
                '选取 12 个产量相关基因靶点,构建 Cas12a 核糖核蛋白并转化水稻愈伤。T1 代植株经 GUIDE-seq 筛选脱靶候选。',
              image: '图 1:实验流程与靶点设计'
            },
            {
              title: '3. 结果',
              content:
                '共获得 87 株编辑植株,编辑效率 41%~76%。脱靶分析发现 3 个低频位点,频率低于 0.3%,且均位于非编码区。'
            },
            {
              title: '4. 讨论',
              content:
                '结果表明 Cas12a 在水稻中具有高保真度,但仍需逐靶点评估。建议在高价值性状改良中结合全基因组测序验证。'
            }
          ],
          references: [
            'Zetsche B, et al. Cpf1 is a single RNA-guided endonuclease. Cell 2015.',
            'Tang X, et al. A CRISPR-Cpf1 system for plant genome editing. Nature Plants 2017.'
          ]
        },
        {
          id: 'life-002',
          title: '海马体 theta 振荡在工作记忆中的因果作用',
          authors: ['Anna Schmidt', 'Mark Liu'],
          year: 2023,
          venue: 'Neuron',
          keywords: ['海马体', 'theta 振荡', '光遗传', '工作记忆'],
          abstract:
            '本文利用光遗传学选择性抑制小鼠海马 theta 振荡,发现空间工作记忆任务正确率下降 22%,而参考记忆不受影响,提示 theta 振荡对在线信息维持具有因果性作用。',
          sections: [
            {
              title: '1. 引言',
              content:
                '海马 theta 振荡(6-10 Hz)被认为参与记忆编码与提取,但其与工作记忆的因果关系尚存争议。'
            },
            {
              title: '2. 方法',
              content:
                '在 CA1 锥体神经元表达 ArchT,通过光纤在 T 迷宫延迟期给予绿光抑制。记录局部场电位与单元活动。',
              image: '图 1:光遗传干预范式'
            },
            {
              title: '3. 结果',
              content:
                '抑制组在延迟匹配任务中正确率由 84% 降至 62%,且 theta 功率与正确率显著正相关。参考记忆任务无显著差异。'
            },
            {
              title: '4. 结论',
              content:
                'theta 振荡特异性支持空间工作记忆的在线维持,而非长时参考记忆。'
            }
          ],
          references: [
            'Buzsáki G. Theta oscillations in the hippocampus. Neuron 2002.',
            'Roux F, Uhlhaas P. Working memory and neural oscillations. Nat Rev Neurosci 2014.'
          ]
        }
      ]
    },
    {
      id: 'social',
      name: '社会科学',
      enName: 'Social Sciences',
      description:
        '研究人类社会、行为与制度的学科,包括社会学、经济学、心理学、政治学等。',
      cover: '社会科学领域封面占位',
      subfields: ['社会学', '经济学', '心理学', '政治学'],
      papers: [
        {
          id: 'soc-001',
          title: '远程办公对知识工作者协作网络的重塑',
          authors: ['林晓', 'David Chen'],
          year: 2024,
          venue: 'American Journal of Sociology',
          keywords: ['远程办公', '社会资本', '协作网络', '弱关系'],
          abstract:
            '基于某科技公司 18 个月通讯数据的纵向分析显示,全面远程办公后员工弱关系数量下降 27%,跨部门信息流减弱,但强关系维持稳定。结果表明远程化侵蚀了组织内的偶然性创新来源。',
          sections: [
            {
              title: '1. 引言',
              content:
                '疫情后远程办公常态化,其对组织社会资本的影响引发广泛讨论。本文聚焦弱关系的结构性变化。'
            },
            {
              title: '2. 数据与方法',
              content:
                '获取 4,200 名员工去标识化的邮件与即时通讯记录,构建月度协作网络,计算弱关系密度与中介中心性。',
              image: '图 1:协作网络演化(强关系 vs 弱关系)'
            },
            {
              title: '3. 结果',
              content:
                '弱关系数量在转为远程后 3 个月内下降 27%,跨部门边的中介中心性下降 19%。回归分析控制岗位与资历后效应显著。'
            },
            {
              title: '4. 讨论与启示',
              content:
                '弱关系是 Granovetter 意义上的“信息桥”,其减弱可能损害长期创新。建议组织通过结构化轮岗与跨团队活动予以补偿。'
            }
          ],
          references: [
            'Granovetter M. The Strength of Weak Ties. AJS 1973.',
            'Yang L, et al. The effects of remote work on collaboration. Nature Human Behaviour 2022.'
          ]
        },
        {
          id: 'soc-002',
          title: '损失厌恶的跨文化稳健性:一项 36 国元分析',
          authors: ['Maria Gonzalez'],
          year: 2023,
          venue: 'Journal of Economic Psychology',
          keywords: ['损失厌恶', '前景理论', '跨文化', '元分析'],
          abstract:
            '本文对 198 项研究、共 12 万被试进行元分析,发现损失厌恶系数中位数为 2.04,但存在显著文化异质性:集体主义文化中系数更高。文化维度可解释 18% 的变异。',
          sections: [
            {
              title: '1. 引言',
              content:
                '前景理论提出损失厌恶作为风险决策的核心特征,但其跨文化稳健性缺乏系统检验。'
            },
            {
              title: '2. 数据来源',
              content:
                '检索五大数据库,纳入 36 国 198 项独立估计。采用随机效应模型,并检验发表偏倚。',
              image: '图 1:各国损失厌恶系数分布'
            },
            {
              title: '3. 结果',
              content:
                '总体系数 2.04 (95% CI 1.92-2.16)。Hofstede 集体主义维度与系数正相关 (r=0.43)。'
            },
            {
              title: '4. 讨论',
              content:
                '损失厌恶具跨文化普遍性,但幅度受文化调节。经济学模型应纳入文化参数以提高外推效度。'
            }
          ],
          references: [
            'Kahneman D, Tversky A. Prospect Theory. Econometrica 1979.',
            'Hofstede G. Culture’s Consequences. 2001.'
          ]
        }
      ]
    },
    {
      id: 'humanities',
      name: '人文学科',
      enName: 'Humanities',
      description:
        '研究人类文化、思想、历史与表达的学科,包括哲学、历史学、文学、语言学等。',
      cover: '人文学科领域封面占位',
      subfields: ['哲学', '历史学', '文学', '语言学'],
      papers: [
        {
          id: 'hum-001',
          title: '荀子“礼”观念中的秩序生成机制',
          authors: ['孙伯'],
          year: 2024,
          venue: '哲学研究',
          keywords: ['荀子', '礼', '秩序', '人性论'],
          abstract:
            '本文重审荀子“礼”观念,论证其并非单纯外在规范,而是基于“分”与“义”的秩序生成机制。礼通过调节欲望与资源的张力,使自然差异转化为社会和谐,体现了荀子独特的化性思路。',
          sections: [
            {
              title: '1. 引言',
              content:
                '学界常将荀子之礼归为外在强制,本文试图揭示其内在的生成逻辑。'
            },
            {
              title: '2. “分”的本体含义',
              content:
                '《王制》言“分均则不偏”,“分”不仅是分配,更是差异的承认与安置。礼的功能在于使分得以正当化。',
              image: '图 1:荀子礼学概念关系图'
            },
            {
              title: '3. “义”作为礼的内在原则',
              content:
                '荀子以“义”统礼,义是判断分之宜否的标准,使礼免于僵化。'
            },
            {
              title: '4. 化性的秩序意涵',
              content:
                '礼之成序,即性之化育。性恶并非终点,而是秩序建构的起点。'
            },
            {
              title: '5. 结论',
              content:
                '荀子礼学提供了一种以差异为前提的秩序观,对当代政治哲学具启发意义。'
            }
          ],
          references: [
            '荀子. 《荀子·王制》《荀子·礼论》.',
            '牟宗三. 《名家与荀子》. 1979.'
          ]
        },
        {
          id: 'hum-002',
          title: '十九世纪英国工业小说中的空间叙事',
          authors: ['Emily Hart'],
          year: 2023,
          venue: 'Journal of Literary Studies',
          keywords: ['工业小说', '空间叙事', '狄更斯', '盖斯凯尔'],
          abstract:
            '本文以狄更斯《艰难时世》与盖斯凯尔《北与南》为对象,分析工业小说中工厂、家庭与旷野三类空间的叙事功能,揭示空间如何承载阶级伦理的张力与协商。',
          sections: [
            {
              title: '1. 引言',
              content:
                '工业小说是维多利亚文学的重要分支,其空间设定常被视作背景而忽视其叙事能动性。'
            },
            {
              title: '2. 工厂空间',
              content:
                '工厂在文本中呈现为机械理性与劳动身体的对抗场域,叙事节奏与机器节拍同构。',
              image: '图 1:三类空间叙事功能示意'
            },
            {
              title: '3. 家庭空间',
              content:
                '家庭既是道德庇护,也是阶级区隔的微观展演。盖斯凯尔笔下南方家庭与北方家庭形成对照。'
            },
            {
              title: '4. 旷野空间',
              content:
                '旷野作为非生产性空间,提供了反思与和解的可能,是叙事的伦理出口。'
            },
            {
              title: '5. 结论',
              content:
                '三类空间的交织构成了工业小说独特的伦理地形,空间叙事本身即一种意识形态表达。'
            }
          ],
          references: [
            '狄更斯. 《艰难时世》. 1854.',
            'Williams R. The Country and the City. 1973.'
          ]
        }
      ]
    }
  ]
};

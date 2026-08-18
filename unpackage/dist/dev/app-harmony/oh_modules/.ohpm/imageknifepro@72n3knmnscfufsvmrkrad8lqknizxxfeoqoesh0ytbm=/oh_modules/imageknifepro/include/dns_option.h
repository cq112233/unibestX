/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


#ifndef IMAGE_KNIFE_C_KEKE_DNS_OPTION_H
#define IMAGE_KNIFE_C_KEKE_DNS_OPTION_H

#include <string>
#include <vector>

namespace ImageKnifePro {

/**
 * @brief 静态DNS规则列表元素
 */
struct StaticDnsRuleItem {
    /**
     * @brief 匹配的host name，最大字节数：256
     */
    std::string host;
    /**
     * @brief 匹配的端口号, 范围0-65535
     */
    uint16_t port = 80;
    /**
     * @brief 当解析host:port时，期望访问的ip地址列表
     */
    std::vector<std::string> ipAddresses;
};

/**
 * @brief 自定义dns设置
 */
class DnsOption {
public:
    /**
     * @brief 创建自定义DnsOption对象
     * @param staticDnsRule 静态dns规则数组，接收右值
     * @return DnsOption对象指针
     */
    static std::shared_ptr<DnsOption> CreateDnsOption(std::vector<StaticDnsRuleItem> &&staticDnsRule);
    /**
     * @brief 创建自定义DnsOption对象
     * @param staticDnsRule 静态dns规则数组，接收常量左值引用
     * @return DnsOption对象指针
     */
    static std::shared_ptr<DnsOption> CreateDnsOption(const std::vector<StaticDnsRuleItem> &staticDnsRule);

    /**
     * @brief 获取静态dns规则数组引用
     * @return StaticDnsRuleItem数组引用
     */
    virtual const std::vector<StaticDnsRuleItem> &GetStaticDnsRule() = 0;
    virtual ~DnsOption() = default;
};

}

#endif //IMAGE_KNIFE_C_KEKE_DNS_OPTION_H

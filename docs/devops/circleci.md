CircleCI 功能
---

#### 需要注意: 

* Credit計算: 每1分鐘10 credit

1. Free 版本, 每週 2500 Credit (250min), 週六 reset
2. 資料主要位於 `.circleci` 資料夾
3. CI 的 yml 設定 `config.yml` 設定檔案

#### BlackBelt Tip:

##### 如何SSH進去機器裡面看:

* `注意!` 進去機器一定要記得取消, 不然會算 Minute
    * 在看Workflow時, 選 `Rerun with SSH`
* SSH 加上 Key
    * 加上 Key 的方法: [見Doc](https://circleci.com/docs/2.0/ssh-access-jobs/)
    * 公司的 CircleCI, 是根據 `zuviordteam` 這個User去SSH登入
    * `公司` 的 SSH Key: `id_rsa_COMPANY`
        1. 需要該把 key
        2. SSH時, 用該把 Key 去登入
    * 去 `ssh` key folder, 下指令 
    * 如: `ssh -i id_rsa_COMPANY -p 64535 3.84.47.135`
    * 注意每次給的 IP 和 Port 會不相同.

##### 撰寫 config.yml

* Yaml 有規定的特殊格式, 需要符合
* 可用 CLI 檢查
    1. 先安裝 `circleci CLI`
    2. CLI 下指令 `circleci validate` 即可檢查
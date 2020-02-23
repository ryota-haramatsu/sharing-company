import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// ストアの定義
const store = new Vuex.Store({
    // タスクの初期state
    state: {
        tasks: [
            {
                id: 1,
                name: '牛乳を買う',
                labelIds: [1,2],
                done: false
            },
            {
                id: 2,
                name: 'Vue.jsの勉強をする',
                labelIds: [1,3],
                done: true
            },
        ],
        labels: [
            {
                id: 1,
                text: '買い物'
            },
            {
                id: 2,
                text: '食料'
            },
            {
                id: 3,
                text: '本'
            },
        ],
        // 実際のアプリではサーバーなどで生成する
        nextTaskId: 3,
        nextLabelId: 4,

        // フィルタするラベルID
        filter: null
    },

    getters: {
        // フィルタ後のタスクを返す
        filteredTasks(state) {
            // ラベルが選択されていなければそのまま一覧を返す
            if (!state.filter) {
                return state.tasks
            }

            // ラベルが選択されていればそのラベルでフィルタリング
            return state.tasks.filter(task => {
                return task.labelIds.indexOf(state.filter) >= 0
            })
        }
    },

    mutations: {
        // タスクを追加する
        addTask (state, { name, labelIds }) {
            state.tasks.push({
                id: state.nextTaskId,
                name,
                labelIds,
                done: false
            })
            
            // 次に追加されるタスクに付与するIDを更新(3->4)
            state.nextTaskId++
        },

        // タスクの完了状態を変更する
        toggleTaskStatus (state, { id }) {
            const filtered = state.tasks.filter(task => {
                return task.id === id
            })

            filtered.forEach(task => {
                task.done = !task.done
            })
        },

        // ラベルを追加する
        addLabel (state, { text }) {
            state.labels.push({
                id: state.nextLabelId,
                text
            })

            // 次に追加されるラベルに付与するIDを更新する(4->5...)
            state.nextLabelId++
        },

        changeFilter (state, { filter }) {
            state.filter = filter
        },

        restore (state, { tasks, labels, nextTaskId, nextLabelId }) {
            state.tasks = tasks
            state.labels = labels
            state.nextTaskId = nextTaskId
            state.nextLabelId = nextLabelId
        }
    },
    
    actions: {
        // ローカルストレージにステートを保存
        save ({ state }) {
            const data = {
                tasks: state.tasks,
                labels: state.labels,
                nextTaskId: state.nextTaskId,
                nextLabelId: state.nextLabelId
            }
            localStorage.setItem('task-app-data', JSON.stringify(data))
        },

        // ローカルストレージからステートを復元
        restore ({ commit }) {
            const data = localStorage.getItem('task-app-data')
            if (data) {
                commit('restore', JSON.parse(data))
            }
        }
    }
})

export default store
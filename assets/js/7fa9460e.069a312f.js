"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5607],{37581:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=t(85893),a=t(11151);const o={custom_edit_url:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_transform_messages.ipynb",description:"Preprocessing chat history with `TransformMessages`",source_notebook:"/notebook/agentchat_transform_messages.ipynb",tags:["long context handling","capability"],title:"Preprocessing Chat History with `TransformMessages`"},r="Preprocessing Chat History with TransformMessages",i={id:"notebooks/agentchat_transform_messages",title:"Preprocessing Chat History with `TransformMessages`",description:"Preprocessing chat history with `TransformMessages`",source:"@site/docs/notebooks/agentchat_transform_messages.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_transform_messages",permalink:"/autogen/docs/notebooks/agentchat_transform_messages",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_transform_messages.ipynb",tags:[{label:"long context handling",permalink:"/autogen/docs/tags/long-context-handling"},{label:"capability",permalink:"/autogen/docs/tags/capability"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_transform_messages.ipynb",description:"Preprocessing chat history with `TransformMessages`",source_notebook:"/notebook/agentchat_transform_messages.ipynb",tags:["long context handling","capability"],title:"Preprocessing Chat History with `TransformMessages`"},sidebar:"notebooksSidebar",previous:{title:"Auto Generated Agent Chat: Teaching",permalink:"/autogen/docs/notebooks/agentchat_teaching"},next:{title:"Translating Video audio using Whisper and GPT-3.5-turbo",permalink:"/autogen/docs/notebooks/agentchat_video_transcript_translate_with_whisper"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Handling Long Contexts",id:"handling-long-contexts",level:2},{value:"Example 1: Limiting number of messages",id:"example-1-limiting-number-of-messages",level:2},{value:"Example 2: Limiting number of tokens",id:"example-2-limiting-number-of-tokens",level:2},{value:"Example 3: Combining transformations",id:"example-3-combining-transformations",level:2},{value:"Handling Sensitive Data",id:"handling-sensitive-data",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"preprocessing-chat-history-with-transformmessages",children:["Preprocessing Chat History with ",(0,s.jsx)(n.code,{children:"TransformMessages"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://colab.research.google.com/github/microsoft/autogen/blob/main/notebook/agentchat_transform_messages.ipynb",children:(0,s.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,s.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_transform_messages.ipynb",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["This notebook illustrates how to use ",(0,s.jsx)(n.code,{children:"TransformMessages"})," give any\n",(0,s.jsx)(n.code,{children:"ConversableAgent"})," the ability to handle long contexts, sensitive data,\nand more."]}),"\n",(0,s.jsxs)(n.admonition,{title:"Requirements",type:"info",children:[(0,s.jsxs)(n.p,{children:["Install ",(0,s.jsx)(n.code,{children:"pyautogen"}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install pyautogen\n"})}),(0,s.jsxs)(n.p,{children:["For more information, please refer to the ",(0,s.jsx)(n.a,{href:"/docs/installation/",children:"installation guide"}),"."]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import copy\nimport pprint\nimport re\nfrom typing import Dict, List, Tuple\n\nimport autogen\nfrom autogen.agentchat.contrib.capabilities import transform_messages, transforms\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'config_list = autogen.config_list_from_json(\n    env_or_file="OAI_CONFIG_LIST",\n)\n# Define your llm config\nllm_config = {"config_list": config_list}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Learn more about configuring LLMs for agents ",(0,s.jsx)(n.a,{href:"/docs/topics/llm_configuration",children:"here"}),"."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# Define your agent; the user proxy and an assistant\nassistant = autogen.AssistantAgent(\n    "assistant",\n    llm_config=llm_config,\n)\nuser_proxy = autogen.UserProxyAgent(\n    "user_proxy",\n    human_input_mode="NEVER",\n    is_termination_msg=lambda x: "TERMINATE" in x.get("content", ""),\n    max_consecutive_auto_reply=10,\n)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"handling-long-contexts",children:"Handling Long Contexts"}),"\n",(0,s.jsxs)(n.p,{children:["Imagine a scenario where the LLM generates an extensive amount of text,\nsurpassing the token limit imposed by your API provider. To address this\nissue, you can leverage ",(0,s.jsx)(n.code,{children:"TransformMessages"})," along with its constituent\ntransformations, ",(0,s.jsx)(n.code,{children:"MessageHistoryLimiter"})," and ",(0,s.jsx)(n.code,{children:"MessageTokenLimiter"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"MessageHistoryLimiter"}),": You can restrict the total number of\nmessages considered as context history. This transform is\nparticularly useful when you want to limit the conversational\ncontext to a specific number of recent messages, ensuring efficient\nprocessing and response generation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"MessageTokenLimiter"}),": Enables you to cap the total number of\ntokens, either on a per-message basis or across the entire context\nhistory (or both). This transformation is invaluable when you need\nto adhere to strict token limits imposed by your API provider,\npreventing unnecessary costs or errors caused by exceeding the\nallowed token count. Additionally, a ",(0,s.jsx)(n.code,{children:"min_tokens"})," threshold can be\napplied, ensuring that the transformation is only applied when the\nnumber of tokens is not less than the specified threshold."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Limit the message history to the 3 most recent messages\nmax_msg_transfrom = transforms.MessageHistoryLimiter(max_messages=3)\n\n# Limit the token limit per message to 10 tokens\ntoken_limit_transform = transforms.MessageTokenLimiter(max_tokens_per_message=3, min_tokens=10)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example-1-limiting-number-of-messages",children:"Example 1: Limiting number of messages"}),"\n",(0,s.jsxs)(n.p,{children:["Let\u2019s take a look at how these transformations will effect the messages.\nBelow we see that by applying the ",(0,s.jsx)(n.code,{children:"MessageHistoryLimiter"}),", we can see\nthat we limited the context history to the 3 most recent messages."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'messages = [\n    {"role": "user", "content": "hello"},\n    {"role": "assistant", "content": [{"type": "text", "text": "there"}]},\n    {"role": "user", "content": "how"},\n    {"role": "assistant", "content": [{"type": "text", "text": "are you doing?"}]},\n    {"role": "user", "content": "very very very very very very long string"},\n]\n\nprocessed_messages = max_msg_transfrom.apply_transform(copy.deepcopy(messages))\npprint.pprint(processed_messages)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"[{'content': 'how', 'role': 'user'},\n {'content': [{'text': 'are you doing?', 'type': 'text'}], 'role': 'assistant'},\n {'content': 'very very very very very very long string', 'role': 'user'}]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example-2-limiting-number-of-tokens",children:"Example 2: Limiting number of tokens"}),"\n",(0,s.jsx)(n.p,{children:"Now let\u2019s test limiting the number of tokens in messages. We can see\nthat we can limit the number of tokens to 3, which is equivalent to 3\nwords in this instance."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"processed_messages = token_limit_transform.apply_transform(copy.deepcopy(messages))\n\npprint.pprint(processed_messages)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"[{'content': 'hello', 'role': 'user'},\n {'content': [{'text': 'there', 'type': 'text'}], 'role': 'assistant'},\n {'content': 'how', 'role': 'user'},\n {'content': [{'text': 'are you doing', 'type': 'text'}], 'role': 'assistant'},\n {'content': 'very very very', 'role': 'user'}]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Also, the ",(0,s.jsx)(n.code,{children:"min_tokens"})," threshold is set to 10, indicating that the\ntransformation will not be applied if the total number of tokens in the\nmessages is less than that. This is especially beneficial when the\ntransformation should only occur after a certain number of tokens has\nbeen reached, such as in the context window of the model. An example is\nprovided below."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'short_messages = [\n    {"role": "user", "content": "hello there, how are you?"},\n    {"role": "assistant", "content": [{"type": "text", "text": "hello"}]},\n]\n\nprocessed_short_messages = token_limit_transform.apply_transform(copy.deepcopy(short_messages))\n\npprint.pprint(processed_short_messages)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"[{'content': 'hello there, how are you?', 'role': 'user'},\n {'content': [{'text': 'hello', 'type': 'text'}], 'role': 'assistant'}]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example-3-combining-transformations",children:"Example 3: Combining transformations"}),"\n",(0,s.jsx)(n.p,{children:"Let\u2019s test these transforms with agents (the upcoming test is replicated\nfrom the agentchat_capability_long_context_handling notebook). We will\nsee that the agent without the capability to handle long context will\nresult in an error, while the agent with that capability will have no\nissues."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'assistant_base = autogen.AssistantAgent(\n    "assistant",\n    llm_config=llm_config,\n)\n\nassistant_with_context_handling = autogen.AssistantAgent(\n    "assistant",\n    llm_config=llm_config,\n)\n# suppose this capability is not available\ncontext_handling = transform_messages.TransformMessages(\n    transforms=[\n        transforms.MessageHistoryLimiter(max_messages=10),\n        transforms.MessageTokenLimiter(max_tokens=1000, max_tokens_per_message=50, min_tokens=500),\n    ]\n)\n\ncontext_handling.add_to_agent(assistant_with_context_handling)\n\nuser_proxy = autogen.UserProxyAgent(\n    "user_proxy",\n    human_input_mode="NEVER",\n    is_termination_msg=lambda x: "TERMINATE" in x.get("content", ""),\n    code_execution_config={\n        "work_dir": "coding",\n        "use_docker": False,\n    },\n    max_consecutive_auto_reply=2,\n)\n\n# suppose the chat history is large\n# Create a very long chat history that is bound to cause a crash\n# for gpt 3.5\nfor i in range(1000):\n    # define a fake, very long messages\n    assitant_msg = {"role": "assistant", "content": "test " * 1000}\n    user_msg = {"role": "user", "content": ""}\n\n    assistant_base.send(assitant_msg, user_proxy, request_reply=False, silent=True)\n    assistant_with_context_handling.send(assitant_msg, user_proxy, request_reply=False, silent=True)\n    user_proxy.send(user_msg, assistant_base, request_reply=False, silent=True)\n    user_proxy.send(user_msg, assistant_with_context_handling, request_reply=False, silent=True)\n\ntry:\n    user_proxy.initiate_chat(assistant_base, message="plot and save a graph of x^2 from -10 to 10", clear_history=False)\nexcept Exception as e:\n    print("Encountered an error with the base assistant")\n    print(e)\n    print("\\n\\n")\n\ntry:\n    user_proxy.initiate_chat(\n        assistant_with_context_handling, message="plot and save a graph of x^2 from -10 to 10", clear_history=False\n    )\nexcept Exception as e:\n    print(e)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"user_proxy (to assistant):\n\nplot and save a graph of x^2 from -10 to 10\n\n--------------------------------------------------------------------------------\nEncountered an error with the base assistant\nError code: 400 - {'error': {'message': \"This model's maximum context length is 16385 tokens. However, your messages resulted in 1009487 tokens. Please reduce the length of the messages.\", 'type': 'invalid_request_error', 'param': 'messages', 'code': 'context_length_exceeded'}}\n\n\n\nuser_proxy (to assistant):\n\nplot and save a graph of x^2 from -10 to 10\n\n--------------------------------------------------------------------------------\nRemoved 1991 messages. Number of messages reduced from 2001 to 10.\nTruncated 3804 tokens. Number of tokens reduced from 4019 to 215\nassistant (to user_proxy):\n\n```python\n# filename: plot_x_squared.py\nimport matplotlib.pyplot as plt\nimport numpy as np\n\n# Generate an array of x values from -10 to 10\nx = np.linspace(-10, 10, 400)\n# Calculate the y values by squaring the x values\ny = x**2\n\n# Create the plot\nplt.figure()\nplt.plot(x, y)\n\n# Title and labels\nplt.title('Graph of y = x^2')\nplt.xlabel('x')\nplt.ylabel('y')\n\n# Save the plot as a file\nplt.savefig('x_squared_plot.png')\n\n# Show the plot\nplt.show()\n```\n\nPlease save the above code into a file named `plot_x_squared.py`. After saving the code, you can execute it to generate and save the graph of y = x^2 from -10 to 10. The graph will also be displayed to you and the file `x_squared_plot.png` will be created in the current directory. Make sure you have `matplotlib` and `numpy` libraries installed in your Python environment before executing the code. If they are not installed, you can install them using `pip`:\n\n```sh\npip install matplotlib numpy\n```\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING CODE BLOCK 0 (inferred language is python)...\n\n>>>>>>>> EXECUTING CODE BLOCK 1 (inferred language is sh)...\nuser_proxy (to assistant):\n\nexitcode: 0 (execution succeeded)\nCode output: \nFigure(640x480)\n\nRequirement already satisfied: matplotlib in c:\\users\\bt314mc\\appdata\\local\\programs\\python\\python311\\lib\\site-packages (3.8.0)\nRequirement already satisfied: numpy in c:\\users\\bt314mc\\appdata\\local\\programs\\python\\python311\\lib\\site-packages (1.26.0)\nRequirement already satisfied: contourpy>=1.0.1 in c:\\users\\bt314mc\\appdata\\local\\programs\\python\\python311\\lib\\site-packages (from matplotlib) (1.1.1)\nRequirement already satisfied: cycler>=0.10 in c:\\users\\bt314mc\\appdata\\local\\programs\\python\\python311\\lib\\site-packages (from matplotlib) (0.11.0)\nRequirement already satisfied: fonttools>=4.22.0 in c:\\users\\bt314mc\\appdata\\local\\programs\\python\\python311\\lib\\site-packages (from matplotlib) (4.42.1)\nRequirement already satisfied: kiwisolver>=1.0.1 in c:\\users\\bt314mc\\appdata\\local\\programs\\python\\python311\\lib\\site-packages (from matplotlib) (1.4.5)\nRequirement already satisfied: packaging>=20.0 in c:\\users\\bt314mc\\appdata\\local\\programs\\python\\python311\\lib\\site-packages (from matplotlib) (23.2)\nRequirement already satisfied: pillow>=6.2.0 in c:\\users\\bt314mc\\appdata\\local\\programs\\python\\python311\\lib\\site-packages (from matplotlib) (10.0.1)\nRequirement already satisfied: pyparsing>=2.3.1 in c:\\users\\bt314mc\\appdata\\local\\programs\\python\\python311\\lib\\site-packages (from matplotlib) (3.1.1)\nRequirement already satisfied: python-dateutil>=2.7 in c:\\users\\bt314mc\\appdata\\local\\programs\\python\\python311\\lib\\site-packages (from matplotlib) (2.8.2)\nRequirement already satisfied: six>=1.5 in c:\\users\\bt314mc\\appdata\\local\\programs\\python\\python311\\lib\\site-packages (from python-dateutil>=2.7->matplotlib) (1.16.0)\n\n\n--------------------------------------------------------------------------------\nRemoved 1993 messages. Number of messages reduced from 2003 to 10.\nTruncated 3523 tokens. Number of tokens reduced from 3788 to 265\nassistant (to user_proxy):\n\nIt appears that the matplotlib library is already installed on your system, and the previous script started successfully but did not finish because the plotting code was incomplete.\n\nI will provide you with the full code to plot and save the graph of \\( x^2 \\) from -10 to 10.\n\n```python\n# filename: plot_x_squared.py\nimport matplotlib.pyplot as plt\nimport numpy as np\n\n# Generate an array of x values from -10 to 10\nx = np.linspace(-10, 10, 400)\n# Calculate the y values based on the x values\ny = x**2\n\n# Create the plot\nplt.figure(figsize=(8, 6))\nplt.plot(x, y, label='y = x^2')\n\n# Add a title and labels\nplt.title('Plot of y = x^2')\nplt.xlabel('x')\nplt.ylabel('y')\n\n# Add a legend\nplt.legend()\n\n# Save the figure\nplt.savefig('plot_x_squared.png')\n\n# Show the plot\nplt.show()\n```\n\nPlease execute this Python code in its entirety. It will create a graph of \\( y = x^2 \\) with x values ranging from -10 to 10, and then it will save the graph as a PNG file named 'plot_x_squared.png' in the current working directory. It will also display the plot window with the graph.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING CODE BLOCK 0 (inferred language is python)...\nuser_proxy (to assistant):\n\nexitcode: 0 (execution succeeded)\nCode output: \nFigure(800x600)\n\n\n--------------------------------------------------------------------------------\nRemoved 1995 messages. Number of messages reduced from 2005 to 10.\nTruncated 2802 tokens. Number of tokens reduced from 3086 to 284\nassistant (to user_proxy):\n\nIt seems the graph has been generated, but the output doesn't tell us if the graph was saved. The expected behavior was to have a file saved in the current working directory. Can you please check in your current directory for a file named `plot_x_squared.png`? If it exists, then the task is complete.\n\nIf you don't find the file, let me know, and I will troubleshoot further.\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,s.jsx)(n.h2,{id:"handling-sensitive-data",children:"Handling Sensitive Data"}),"\n",(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.code,{children:"MessageTransform"})," protocol to create custom message\ntransformations that redact sensitive data from the chat history. This\nis particularly useful when you want to ensure that sensitive\ninformation, such as API keys, passwords, or personal data, is not\nexposed in the chat history or logs."]}),"\n",(0,s.jsx)(n.p,{children:"Now, we will create a custom message transform to detect any OpenAI API\nkey and redact it."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# The transform must adhere to transform_messages.MessageTransform protocol.\nclass MessageRedact:\n    def __init__(self):\n        self._openai_key_pattern = r"sk-([a-zA-Z0-9]{48})"\n        self._replacement_string = "REDACTED"\n\n    def apply_transform(self, messages: List[Dict]) -> List[Dict]:\n        temp_messages = copy.deepcopy(messages)\n\n        for message in temp_messages:\n            if isinstance(message["content"], str):\n                message["content"] = re.sub(self._openai_key_pattern, self._replacement_string, message["content"])\n            elif isinstance(message["content"], list):\n                for item in message["content"]:\n                    if item["type"] == "text":\n                        item["text"] = re.sub(self._openai_key_pattern, self._replacement_string, item["text"])\n        return temp_messages\n\n    def get_logs(self, pre_transform_messages: List[Dict], post_transform_messages: List[Dict]) -> Tuple[str, bool]:\n        keys_redacted = self._count_redacted(post_transform_messages) - self._count_redacted(pre_transform_messages)\n        if keys_redacted > 0:\n            return f"Redacted {keys_redacted} OpenAI API keys.", True\n        return "", False\n\n    def _count_redacted(self, messages: List[Dict]) -> int:\n        # counts occurrences of "REDACTED" in message content\n        count = 0\n        for message in messages:\n            if isinstance(message["content"], str):\n                if "REDACTED" in message["content"]:\n                    count += 1\n            elif isinstance(message["content"], list):\n                for item in message["content"]:\n                    if isinstance(item, dict) and "text" in item:\n                        if "REDACTED" in item["text"]:\n                            count += 1\n        return count\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'assistant_with_redact = autogen.AssistantAgent(\n    "assistant",\n    llm_config=llm_config,\n    max_consecutive_auto_reply=1,\n)\n# suppose this capability is not available\nredact_handling = transform_messages.TransformMessages(transforms=[MessageRedact()])\n\nredact_handling.add_to_agent(assistant_with_redact)\n\nuser_proxy = autogen.UserProxyAgent(\n    "user_proxy",\n    human_input_mode="NEVER",\n    max_consecutive_auto_reply=1,\n)\n\nmessages = [\n    {"content": "api key 1 = sk-7nwt00xv6fuegfu3gnwmhrgxvuc1cyrhxcq1quur9zvf05fy"},  # Don\'t worry, randomly generated\n    {"content": [{"type": "text", "text": "API key 2 = sk-9wi0gf1j2rz6utaqd3ww3o6c1h1n28wviypk7bd81wlj95an"}]},\n]\n\nfor message in messages:\n    user_proxy.send(message, assistant_with_redact, request_reply=False, silent=True)\n\nresult = user_proxy.initiate_chat(\n    assistant_with_redact, message="What are the two API keys that I just provided", clear_history=False\n)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'user_proxy (to assistant):\n\nWhat are the two API keys that I just provided\n\n--------------------------------------------------------------------------------\nRedacted 2 OpenAI API keys.\nassistant (to user_proxy):\n\nAs an AI, I must inform you that it is not safe to share API keys publicly as they can be used to access your private data or services that can incur costs. Given that you\'ve typed "REDACTED" instead of the actual keys, it seems you are aware of the privacy concerns and are likely testing my response or simulating an exchange without exposing real credentials, which is a good practice for privacy and security reasons.\n\nTo respond directly to your direct question: The two API keys you provided are both placeholders indicated by the text "REDACTED", and not actual API keys. If these were real keys, I would have reiterated the importance of keeping them secure and would not display them here.\n\nRemember to keep your actual API keys confidential to prevent unauthorized use. If you\'ve accidentally exposed real API keys, you should revoke or regenerate them as soon as possible through the corresponding service\'s API management console.\n\n--------------------------------------------------------------------------------\nuser_proxy (to assistant):\n\n\n\n--------------------------------------------------------------------------------\nRedacted 2 OpenAI API keys.\n'})})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var s=t(67294);const a={},o=s.createContext(a);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);